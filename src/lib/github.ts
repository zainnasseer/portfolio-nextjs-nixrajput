import {
  githubRepoListSchema,
  githubRepoSchema,
  githubUserStatsSchema,
  type GithubRepo,
} from "./schemas";

const GITHUB_API = "https://api.github.com";
const GITHUB_GRAPHQL = "https://api.github.com/graphql";
const REVALIDATE_SECONDS = 3600;

function authHeaders(): HeadersInit {
  // Server-only token (NOT NEXT_PUBLIC_*) — this code never runs on the client,
  // so the token is never bundled into the browser. Used only to raise GitHub's
  // anonymous rate limit (60/hr) to the authenticated 5,000/hr for public reads.
  const token = process.env.GITHUB_TOKEN;
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export type GithubUserStats = {
  followers: number;
  publicRepos: number;
  totalStars: number;
  firstContributionYear: number | null;
};

// One query for every account-level stat. GraphQL requires a token: without one this 401s and
// the caller falls back to the cached row.
const USER_STATS_QUERY = `query($login:String!){
  user(login:$login){
    followers{totalCount}
    repositories(privacy:PUBLIC ownerAffiliations:OWNER isFork:false first:100){
      totalCount
      nodes{stargazerCount}
    }
    contributionsCollection{contributionYears}
  }
}`;

type GithubUserJson = {
  followers?: number;
  public_repos?: number;
};

/** Public REST fallback when GraphQL is unavailable (no token → 401). */
async function getUserStatsFromRest(username: string): Promise<GithubUserStats | null> {
  const userRes = await fetch(`${GITHUB_API}/users/${username}`, {
    headers: authHeaders(),
    next: { revalidate: REVALIDATE_SECONDS, tags: ["github"] },
  });
  if (!userRes.ok) return null;
  const user = (await userRes.json()) as GithubUserJson;
  if (typeof user.followers !== "number") return null;

  let repos: GithubRepo[] = [];
  try {
    repos = await listUserRepos(username);
  } catch {
    repos = [];
  }
  const owned = repos.filter((r) => !r.fork);
  return {
    followers: user.followers,
    publicRepos: user.public_repos ?? owned.length,
    totalStars: owned.reduce((sum, r) => sum + r.stargazers_count, 0),
    firstContributionYear: null,
  };
}

/** Account-level stats: GraphQL when a token is present, otherwise REST. */
export async function getUserStats(username: string): Promise<GithubUserStats | null> {
  if (process.env.GITHUB_TOKEN) {
    try {
      const res = await fetch(GITHUB_GRAPHQL, {
        method: "POST",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({ query: USER_STATS_QUERY, variables: { login: username } }),
        next: { revalidate: REVALIDATE_SECONDS, tags: ["github"] },
      });
      if (res.ok) {
        const parsed = githubUserStatsSchema.parse(await res.json());
        const user = parsed.data.user;
        if (!user) return null;

        const years = user.contributionsCollection.contributionYears;
        return {
          followers: user.followers.totalCount,
          publicRepos: user.repositories.totalCount,
          totalStars: user.repositories.nodes.reduce((sum, r) => sum + r.stargazerCount, 0),
          firstContributionYear: years.length > 0 ? Math.min(...years) : null,
        };
      }
    } catch {
      /* fall through to REST */
    }
  }

  return getUserStatsFromRest(username);
}

/** Fetch a single repo by "owner/name". Returns null on 404. Throws on bad schema. */
export async function getRepo(slug: string): Promise<GithubRepo | null> {
  const res = await fetch(`${GITHUB_API}/repos/${slug}`, {
    headers: authHeaders(),
    next: { revalidate: REVALIDATE_SECONDS, tags: ["github"] },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub getRepo ${slug} failed: ${res.status}`);
  return githubRepoSchema.parse(await res.json());
}

/** Fetch a repo's README as raw markdown. Returns null when the repo has none (404),
 *  which is common enough that it is not an error. Throws on other failures so the
 *  caller can fall back to cache. */
export async function getReadme(slug: string): Promise<string | null> {
  const res = await fetch(`${GITHUB_API}/repos/${slug}/readme`, {
    // The raw media type returns markdown directly instead of base64 JSON.
    headers: { ...authHeaders(), Accept: "application/vnd.github.raw" },
    next: { revalidate: REVALIDATE_SECONDS, tags: ["github"] },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub getReadme ${slug} failed: ${res.status}`);
  return res.text();
}

/** List a user's public repos (paginated, 100/page, sorted by pushed). */
export async function listUserRepos(username: string): Promise<GithubRepo[]> {
  const res = await fetch(
    `${GITHUB_API}/users/${username}/repos?per_page=100&sort=pushed&type=owner`,
    {
      headers: authHeaders(),
      next: { revalidate: REVALIDATE_SECONDS, tags: ["github"] },
    },
  );
  if (!res.ok) throw new Error(`GitHub listUserRepos ${username} failed: ${res.status}`);
  return githubRepoListSchema.parse(await res.json());
}

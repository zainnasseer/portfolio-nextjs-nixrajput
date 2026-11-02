import { afterEach, describe, expect, it, vi } from "vitest";
import { getRepo, getUserStats, listUserRepos } from "./github";

const repoFixture = {
  name: "siphon",
  full_name: "nixrajput/siphon",
  html_url: "https://github.com/nixrajput/siphon",
  description: "A thing",
  homepage: "https://siphon.dev",
  language: "TypeScript",
  stargazers_count: 42,
  forks_count: 7,
  open_issues_count: 1,
  topics: ["cli"],
  fork: false,
  archived: false,
  pushed_at: "2026-01-01T00:00:00Z",
};

afterEach(() => vi.restoreAllMocks());

describe("getRepo", () => {
  it("returns a validated repo on 200", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify(repoFixture), { status: 200 })),
    );
    const repo = await getRepo("nixrajput/siphon");
    expect(repo?.stargazers_count).toBe(42);
  });

  it("returns null on 404", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response("Not Found", { status: 404 })),
    );
    expect(await getRepo("nixrajput/missing")).toBeNull();
  });

  it("throws on schema mismatch", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ name: 1 }), { status: 200 })),
    );
    await expect(getRepo("nixrajput/bad")).rejects.toThrow();
  });
});

describe("listUserRepos", () => {
  it("returns a validated array", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify([repoFixture]), { status: 200 })),
    );
    const repos = await listUserRepos("nixrajput");
    expect(repos).toHaveLength(1);
  });
});

describe("getUserStats", () => {
  const statsResponse = {
    data: {
      user: {
        followers: { totalCount: 112 },
        repositories: {
          totalCount: 61,
          nodes: [{ stargazerCount: 500 }, { stargazerCount: 115 }],
        },
        contributionsCollection: { contributionYears: [2026, 2020, 2015, 2018] },
      },
    },
  };

  it("sums stars and picks the earliest contribution year", async () => {
    vi.stubEnv("GITHUB_TOKEN", "test-token");
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify(statsResponse), { status: 200 })),
    );
    const stats = await getUserStats("nixrajput");
    expect(stats).toEqual({
      followers: 112,
      publicRepos: 61,
      totalStars: 615,
      firstContributionYear: 2015,
    });
  });

  it("returns null when the user is absent", async () => {
    vi.stubEnv("GITHUB_TOKEN", "test-token");
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ data: { user: null } }), { status: 200 })),
    );
    expect(await getUserStats("ghost")).toBeNull();
  });

  it("falls back to REST when GraphQL fails without a token", async () => {
    vi.stubEnv("GITHUB_TOKEN", "");
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: RequestInfo | URL) => {
        const url = String(input);
        if (url.includes("/graphql")) {
          return new Response("nope", { status: 401 });
        }
        if (url.endsWith("/users/nixrajput")) {
          return new Response(JSON.stringify({ followers: 5, public_repos: 2 }), { status: 200 });
        }
        if (url.includes("/users/nixrajput/repos")) {
          return new Response(JSON.stringify([{ ...repoFixture, fork: false }]), { status: 200 });
        }
        throw new Error(`unexpected fetch: ${url}`);
      }),
    );
    const stats = await getUserStats("nixrajput");
    expect(stats).toEqual({
      followers: 5,
      publicRepos: 2,
      totalStars: 42,
      firstContributionYear: null,
    });
  });
});

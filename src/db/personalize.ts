import { eq } from "drizzle-orm";
import { db } from "./client";
import {
  profile,
  projects,
  experiences,
  skills,
  services,
  socialLinks,
  fundingLinks,
  taglines,
  faqs,
  testimonials,
  githubCache,
} from "./schema";
import { ZAIN } from "@/content/zain-portfolio";

async function personalize() {
  const skillRows = ZAIN.skillGroups.flatMap((g, gi) =>
    g.items.map((it, ii) => ({
      name: it.name,
      iconPath: it.iconPath,
      category: g.category,
      level: it.level,
      order: gi * 100 + ii,
    })),
  );

  const projectRows = ZAIN.projects.map((p) => ({
    repo: p.repo,
    title: p.title,
    tags: [...p.tags],
    featured: p.featured,
    order: p.order,
    hidden: false,
    customBlurb: "customBlurb" in p ? (p.customBlurb ?? null) : null,
    coverImage: null,
    screenshots: [],
  }));

  console.log("Replacing portfolio content with Zain Nasseer profile…");

  await db.transaction(async (tx) => {
    await tx.delete(testimonials);
    await tx.delete(projects);
    await tx.delete(experiences);
    await tx.delete(skills);
    await tx.delete(services);
    await tx.delete(socialLinks);
    await tx.delete(fundingLinks);
    await tx.delete(faqs);
    await tx.delete(taglines);
    await tx.delete(githubCache);

    await tx.insert(taglines).values([...ZAIN.taglines]);
    await tx.insert(projects).values(projectRows);
    await tx.insert(experiences).values([...ZAIN.experiences]);
    await tx.insert(skills).values(skillRows);
    await tx.insert(services).values([...ZAIN.services]);
    await tx.insert(socialLinks).values([...ZAIN.socialLinks]);
    await tx.insert(faqs).values([...ZAIN.faqs]);

    const [row] = await tx.select({ id: profile.id }).from(profile).limit(1);
    if (!row) {
      throw new Error("No profile row found — run db:migrate and db:seed first.");
    }

    await tx
      .update(profile)
      .set({
        name: ZAIN.displayName,
        bio: ZAIN.bio,
        roles: [...ZAIN.roles],
        heroTagline: ZAIN.heroTagline,
        avatarUrl: ZAIN.avatarUrl,
        resumeUrl: "resumeUrl" in ZAIN ? (ZAIN.resumeUrl ?? null) : null,
        stats: { years: 1, repos: 6, stars: 0, followers: 0 },
        sectionVisibility: { ...ZAIN.sectionVisibility },
        updatedAt: new Date(),
      })
      .where(eq(profile.id, row.id));
  });

  console.log("Personalization complete.");
}

personalize()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

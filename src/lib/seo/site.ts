import { requirePublicEnv } from "@/lib/env";

export const SITE = {
  url: requirePublicEnv("NEXT_PUBLIC_SITE_URL"),
  name: "Zain Nasseer",
  title: "Zain Nasseer · Backend Developer & Communications Engineer",
  description:
    "Zain Nasseer—backend engineer (Node.js, TypeScript, Bun, Express), QA for APIs, e-commerce, and tvOS streaming, and PostgreSQL/Drizzle database work. Baghdad, Iraq. Native Arabic, fluent English.",
  handle: "@zainnasseer",
  wordmark: "zainnasseer",
  location: "Baghdad, Iraq",
  sameAs: [
    "https://github.com/zainnasseer",
    "https://www.linkedin.com/in/zain-naseer-166a36345",
    "mailto:zainnaser18@gmail.com",
  ],
} as const;

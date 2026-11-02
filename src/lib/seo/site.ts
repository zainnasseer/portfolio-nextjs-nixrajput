import { requirePublicEnv } from "@/lib/env";

export const SITE = {
  url: requirePublicEnv("NEXT_PUBLIC_SITE_URL"),
  name: "Zain Nasseer",
  title: "Zain Nasseer · Backend Developer & Communications Engineer",
  description:
    "Zainulabdeen Naseer Noori (Zain Nasseer) is a backend developer and Communications Engineer in Baghdad, Iraq—Node.js, NestJS, PostgreSQL, QA for APIs and tvOS streaming, and ESP32 IoT projects.",
  handle: "@zainnasseer",
  wordmark: "zainnasseer",
  location: "Baghdad, Iraq",
  sameAs: [
    "https://github.com/zainnasseer",
    "https://www.linkedin.com/in/zain-naseer-166a36345",
    "mailto:zainnaser18@gmail.com",
  ],
} as const;

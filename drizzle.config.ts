import { defineConfig } from "drizzle-kit";

// Neon: run migrations on the direct (non-pooler) URL; the app uses pooled DATABASE_URL at runtime.
const migrationUrl =
  process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
if (!migrationUrl) {
  throw new Error("DATABASE_URL or DATABASE_URL_UNPOOLED is not set");
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url: migrationUrl },
  strict: true,
  verbose: true,
});

import { describe, expect, it } from "vitest";
import { normalizePublicAssetUrl } from "./public-asset-url";

describe("normalizePublicAssetUrl", () => {
  it("passes through relative paths", () => {
    expect(normalizePublicAssetUrl("/images/nikhil.png")).toBe("/images/nikhil.png");
  });

  it("rewrites localhost absolute URLs to a relative public path", () => {
    expect(normalizePublicAssetUrl("http://localhost:4000/images/nikhil.png")).toBe(
      "/images/nikhil.png",
    );
  });

  it("rewrites same-origin absolute URLs using NEXT_PUBLIC_SITE_URL", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";
    expect(normalizePublicAssetUrl("https://example.com/images/a.png")).toBe("/images/a.png");
    delete process.env.NEXT_PUBLIC_SITE_URL;
  });

  it("keeps external CDN URLs", () => {
    expect(normalizePublicAssetUrl("https://cdn.example.com/a.png")).toBe(
      "https://cdn.example.com/a.png",
    );
  });
});

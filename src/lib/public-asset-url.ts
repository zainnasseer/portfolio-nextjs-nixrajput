/**
 * Same-origin absolute URLs → relative paths so `next/image` serves bundled `/public`
 * assets directly. Next.js 16 blocks optimizing remote URLs that resolve to private IPs
 * (e.g. `http://localhost:4000/...` during local dev).
 */
export function normalizePublicAssetUrl(url: string): string {
  if (!url || url.startsWith("/")) return url;
  try {
    const parsed = new URL(url);
    const site = process.env.NEXT_PUBLIC_SITE_URL;
    if (site) {
      try {
        if (parsed.origin === new URL(site).origin) {
          return `${parsed.pathname}${parsed.search}`;
        }
      } catch {
        /* invalid NEXT_PUBLIC_SITE_URL */
      }
    }
    if (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") {
      return `${parsed.pathname}${parsed.search}`;
    }
  } catch {
    /* not a URL */
  }
  return url;
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

// Light glyphs (e.g. Next.js wordmark) need inversion on light surfaces only.
const INVERT_IN_LIGHT = /nextjs|next-js|next\.|vercel|flask|github/i;
// Black brand marks need inversion on dark surfaces only.
const INVERT_IN_DARK = /apple|drizzle/i;

export function SkillCard({ name, iconPath }: { name: string; iconPath: string }) {
  const invertLight = INVERT_IN_LIGHT.test(iconPath) || INVERT_IN_LIGHT.test(name);
  const invertDark = INVERT_IN_DARK.test(iconPath);
  const isBun = /\/bun\.svg$/i.test(iconPath);
  return (
    <motion.li
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="border-border bg-surface hover:border-foreground/20 hover:bg-surface-2 flex h-full flex-col items-center justify-center gap-2 rounded-2xl border p-4 transition motion-reduce:transform-none motion-reduce:transition-none"
    >
      <span className="bg-surface-2 relative flex size-12 items-center justify-center rounded-xl p-1.5">
        <Image
          src={iconPath}
          alt=""
          aria-hidden
          fill
          sizes="48px"
          // unoptimized: icons are tiny (no optimizer gain) and this serves
          // static paths, remote raster, and remote/uploaded SVG uniformly
          // without the next/image SVG restriction.
          unoptimized
          className={cn(
            "object-contain",
            isBun ? "p-0.5" : "p-1.5",
            invertLight && "invert dark:invert-0",
            invertDark && "dark:invert",
          )}
          onError={() => {}}
        />
      </span>
      <span className="text-foreground/80 text-center text-xs leading-snug font-medium">
        {name}
      </span>
    </motion.li>
  );
}

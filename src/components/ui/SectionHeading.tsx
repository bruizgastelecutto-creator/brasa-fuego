"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      <span className="section-eyebrow flex items-center gap-3 text-gold">
        <span className="h-px w-8 bg-gold" />
        {eyebrow}
        {align === "center" && <span className="h-px w-8 bg-gold" />}
      </span>
      <h2
        className={clsx(
          "font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl",
          light ? "text-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}

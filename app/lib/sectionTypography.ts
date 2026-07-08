/** Shared section title + lede (brand-variable driven). */

export const sectionEyebrowClass =
  "m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]";

export const sectionH2Class =
  "font-heading m-0 mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl";

/** h2 inside horizontal rules (flex row) — no top margin so lines stay centered. */
export const sectionH2FlankedClass =
  "font-heading m-0 min-w-0 max-w-full text-center text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl text-center w-fit mx-auto";

/** Centered h2 — use after eyebrow */
export const sectionH2CenterClass =
  "font-heading m-0 mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl text-center";

export const sectionLedeClass =
  "m-0 mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg";

/** Centered lede */
export const sectionLedeCenterClass =
  "m-0 mt-4 mx-auto max-w-2xl text-center text-base leading-relaxed text-[var(--color-muted)] md:text-lg";

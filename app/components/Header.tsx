"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const NAV_LINKS = [
  { label: "Huolto", href: "#" },
  { label: "Meistä", href: "#" },
  { label: "Ota yhteyttä", href: "#" },
] as const;

const navLinkClass =
  "whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-white/90 transition-colors hover:text-white " +
  "drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]";

const navLinkScrolledClass =
  "whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground)]/80 transition-colors hover:text-[var(--color-primary)]";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", menuOpen);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [menuOpen]);

  const logo = (
    <Link
      href="#"
      className="inline-flex items-center no-underline"
      onClick={() => setMenuOpen(false)}
    >
      <span className="font-heading text-lg font-bold tracking-tight text-[var(--color-primary)] md:text-xl">
        Matinkylän Auto
      </span>
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div
        className={[
          "w-full transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
          scrolled
            ? "border-b border-black/10 bg-white/95 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        {/* Desktop: split — logo on white (left), nav on video (right) */}
        <div className="mx-auto hidden h-16 w-full md:grid md:grid-cols-[52%_1fr] md:items-center lg:h-[4.5rem] lg:grid-cols-[58%_1fr]">
          <div className="flex min-w-0 items-center px-6 lg:px-8 2xl:px-20">{logo}</div>

          <div className="relative flex min-w-0 items-center justify-end gap-4 px-6 lg:gap-6 lg:px-8 2xl:px-12">
            {!scrolled ? (
              <div
                className="pointer-events-none"
                aria-hidden
              />
            ) : null}

            <nav
              className={[
                "relative z-10 flex w-fit flex-nowrap items-center justify-end gap-4 whitespace-nowrap lg:gap-7",
                scrolled ? "gap-4" : "",
              ].join(" ")}
              aria-label="Päävalikko"
            >
              {NAV_LINKS.map((item, i) => (
                <span key={item.label} className="inline-flex items-center gap-4 lg:gap-7">
                  {i > 0 ? (
                    <span
                      className={scrolled ? "text-[var(--color-muted)]" : "text-white/50"}
                      aria-hidden
                    >
                      •
                    </span>
                  ) : null}
                  <Link
                    href={item.href}
                    className={scrolled ? navLinkScrolledClass : navLinkClass}
                  >
                    {item.label}
                  </Link>
                </span>
              ))}

              <Button
                href="#"
                variant="primary"
                className={[
                  "relative z-10 shrink-0 transition-all duration-300 hover:scale-105",
                  scrolled ? "" : "drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]",
                ].join(" ")}
              >
                Pyydä tarjous
              </Button>
            </nav>
          </div>
        </div>

        {/* Mobile */}
        <div className="mx-auto flex h-16 items-center justify-between gap-4 px-5 md:hidden">
          {logo}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className={[
              "grid size-10 place-items-center rounded-xl border transition",
              scrolled
                ? "border-black/10 bg-white text-[var(--color-primary)]"
                : "border-white/20 bg-black/20 text-white backdrop-blur-sm",
            ].join(" ")}
            aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "fixed inset-0 z-[60] md:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={["absolute inset-0 bg-black/50 transition-opacity", menuOpen ? "opacity-100" : "opacity-0"].join(
            " ",
          )}
          onClick={() => setMenuOpen(false)}
          aria-label="Sulje valikko"
        />
        <aside
          className={[
            "absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white p-6 shadow-2xl transition-transform duration-300",
            menuOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <nav className="mt-4 flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="#"
              variant="secondary"
              className="mt-4 w-full border-[var(--color-primary)] text-[var(--color-primary)]"
              onClick={() => setMenuOpen(false)}
            >
              Pyydä tarjous
            </Button>
          </nav>
        </aside>
      </div>
    </header>
  );
}

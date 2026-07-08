"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const NAV_LINKS = [
  { label: "Autot", href: "#autot" },
  { label: "Rahoitus", href: "#rahoitus" },
  { label: "Palvelut", href: "#palvelut" },
  { label: "Yhteystiedot", href: "#contact" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className="inline-flex items-center gap-2 no-underline"
      onClick={() => setMenuOpen(false)}
    >
      <span className="font-heading text-lg font-extrabold tracking-tight text-[var(--color-primary)] md:text-xl">
        T1 Auto
      </span>
    </Link>
  );

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full">
      <div
        className={[
          "w-full border-b bg-white/95 backdrop-blur-md transition-shadow duration-300",
          scrolled ? "border-black/10 shadow-[0_1px_0_rgba(0,0,0,0.02)]" : "border-black/5",
        ].join(" ")}
      >
        {/* Desktop */}
        <div className="mx-auto hidden h-16 w-full max-w-none items-center justify-between px-6 md:flex lg:h-[4.5rem] lg:px-8 2xl:px-12">
          {logo}

          <nav
            className="flex flex-nowrap items-center gap-4 whitespace-nowrap lg:gap-7"
            aria-label="Päävalikko"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground)]/75 transition-colors hover:text-[var(--color-accent)]"
              >
                {item.label}
              </Link>
            ))}

            <Button href="#contact" variant="primary" className="shrink-0">
              Ota yhteyttä
            </Button>
          </nav>
        </div>

        {/* Mobile */}
        <div className="mx-auto flex h-16 items-center justify-between gap-4 px-5 md:hidden">
          {logo}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-black/10 bg-white text-[var(--color-accent)] transition"
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
              href="#contact"
              variant="secondary"
              className="mt-4 w-full border-[var(--color-primary)] text-[var(--color-primary)]"
              onClick={() => setMenuOpen(false)}
            >
              Ota yhteyttä
            </Button>
          </nav>
        </aside>
      </div>
    </header>
  );
}

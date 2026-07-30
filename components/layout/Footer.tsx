import Link from "next/link";
import Image from "next/image";
import { CONTACT, OPENING_HOURS } from "../../app/lib/contact";

const QUICK_LINKS = [
  { label: "Autot", href: "#autot" },
  { label: "Rahoitus", href: "#rahoitus" },
  { label: "Palvelut", href: "#palvelut" },
  { label: "Yhteystiedot", href: "#contact" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black/[0.06] bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <span className="inline-flex items-center gap-2">
              <span className="font-heading text-lg font-extrabold tracking-tight text-[var(--color-primary)]">
                Automyynti Nordic
              </span>
            </span>
            <p className="m-0 mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
              Vaihtoautoja, joustava rahoitus ja rehellinen palvelu Helsingissä.
            </p>
          </div>

          <div>
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Pikalinkit
            </p>
            <ul className="m-0 mt-4 flex list-none flex-col gap-2.5 p-0">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-foreground)]/85 no-underline transition-colors hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Yhteystiedot
            </p>
            <ul className="m-0 mt-4 flex list-none flex-col gap-2.5 p-0 text-sm text-[var(--color-foreground)]/85">
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-[var(--color-accent)]">
                  {CONTACT.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="break-all transition-colors hover:text-[var(--color-accent)]"
                >
                  {CONTACT.emailLabel}
                </a>
              </li>
              <li>
                <a href={CONTACT.mapHref} className="transition-colors hover:text-[var(--color-accent)]">
                  {CONTACT.addressLine1}, {CONTACT.addressLine2}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Aukioloajat
            </p>
            <ul className="m-0 mt-4 flex list-none flex-col gap-2.5 p-0 text-sm text-[var(--color-foreground)]/85">
              {OPENING_HOURS.map(({ day, hours }) => (
                <li key={day} className="flex items-baseline justify-between gap-6">
                  <span>{day}</span>
                  <span className="text-[var(--color-muted)]">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-black/[0.06] pt-6 text-xs text-[var(--color-muted)]">
          © {year} Automyynti Nordic. Kaikki oikeudet pidätetään.
        </div>
      </div>
    </footer>
  );
}

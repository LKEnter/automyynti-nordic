import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PARTNERS = ["Big Bank", "Svea", "MyMoney"] as const;

export default function FinancingPartnersSection() {
  return (
    <section className="w-full bg-[var(--color-secondary)] pb-14 md:pb-20" aria-label="Rahoituskumppanit">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[20px] bg-white p-2 shadow-[0_4px_24px_rgba(0,0,0,0.06)] lg:grid-cols-2 lg:gap-0 lg:p-0">
          <div className="relative min-h-[260px] overflow-hidden rounded-[16px] lg:min-h-[380px] lg:rounded-none lg:rounded-l-[20px]">
            <Image
              src="/assets/financing.jpg"
              alt="Asiakas keskustelemassa rahoitusvaihtoehdoista"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>

          <div className="p-6 sm:p-10 lg:p-14">
            <h3 className="font-heading m-0 text-2xl font-extrabold tracking-tight text-[var(--color-foreground)] md:text-3xl">
              Rahoitus juuri sinun tilanteeseesi.
            </h3>
            <p className="m-0 mt-4 max-w-md text-base leading-relaxed text-[var(--color-muted)]">
              Vertailemme vaihtoehdot useilta rahoituskumppaneilta ja löydämme sinulle sopivimman ratkaisun.
            </p>

            <ul className="m-0 mt-6 flex flex-wrap gap-3 p-0" aria-label="Rahoituskumppanit">
              {PARTNERS.map((partner) => (
                <li
                  key={partner}
                  className="list-none rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-foreground)]"
                >
                  {partner}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] no-underline transition-colors hover:text-[var(--color-brand-700)]"
            >
              Hae rahoitusta
              <ArrowRight className="size-4" strokeWidth={2.25} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

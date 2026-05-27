import Image from "next/image";
import Button from "./Button";
import { sectionH2Class } from "../lib/sectionTypography";

export default function AboutSection() {
  return (
    <section id="meista" className="w-full bg-white py-14 md:py-20" aria-label="Meistä">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="min-w-0">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">Meistä</p>
          <h2 className={`${sectionH2Class} text-balance`}>
            Asiantuntevaa huoltoa — helposti ja selkeästi
          </h2>
          <p className="m-0 mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            Meille tärkeintä on läpinäkyvä palvelu: kerromme etukäteen mitä tehdään, mitä se maksaa ja milloin auto on valmis.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="#" variant="primary">
              Lue lisää
            </Button>
            <Button href="#" variant="secondary">
              Ota yhteyttä
            </Button>
          </div>
        </div>

        <div className="min-w-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 overflow-hidden rounded-3xl bg-[var(--color-secondary)] shadow-[0_14px_40px_rgba(0,0,0,0.12)]">
              <Image
                src="/assets/services/air-service.jpg"
                alt=""
                width={1400}
                height={800}
                priority={false}
                className="h-[220px] w-full object-cover sm:h-[260px] lg:h-[300px]"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" aria-hidden />
            </div>

            <div className="relative col-span-1 overflow-hidden rounded-3xl bg-[var(--color-secondary)] shadow-[0_14px_40px_rgba(0,0,0,0.12)]">
              <Image
                src="/assets/services/brake-service.jpg"
                alt=""
                width={900}
                height={900}
                className="h-[180px] w-full object-cover sm:h-[200px] lg:h-[220px]"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" aria-hidden />
            </div>

            <div className="relative col-span-1 overflow-hidden rounded-3xl bg-[var(--color-secondary)] shadow-[0_14px_40px_rgba(0,0,0,0.12)]">
              <Image
                src="/assets/services/diagnostic-service.jpg"
                alt=""
                width={900}
                height={900}
                className="h-[180px] w-full object-cover sm:h-[200px] lg:h-[220px]"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


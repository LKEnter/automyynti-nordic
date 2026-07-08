import Image from "next/image";
import {
  sectionEyebrowClass,
  sectionH2CenterClass,
  sectionLedeCenterClass,
} from "../lib/sectionTypography";

const STATS = [
  { value: "1", label: "Yhden miehen autoliike" },
  { value: "7 pv", label: "Ajanvaraus joka viikonpäivä" },
  { value: "2021", label: "Perustettu" },
  { value: "18", label: "Autoa valikoimassa" },
] as const;

const DEALERSHIP_IMAGE = "/assets/images/hero-showroom.png";

export default function WhyT1AutoSection() {
  return (
    <section className="w-full bg-white py-14 md:py-20" aria-label="Miksi T1 Auto">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className={sectionEyebrowClass}>Meistä</p>
          <h2 className={sectionH2CenterClass}>Miksi T1 Auto</h2>
          <p className={sectionLedeCenterClass}>
            Henkilökohtaista ja rehellistä autokauppaa Raumalla — ilman turhaa mutkittelua.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:mt-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,4fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0 lg:py-2">
            <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="m-0 font-heading text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] md:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="m-0 mt-1.5 text-sm text-[var(--color-muted)]">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[20px] bg-[var(--color-secondary)] shadow-[0_8px_32px_rgba(0,0,0,0.08)] sm:min-h-[360px] lg:min-h-[420px]">
            <Image
              src={DEALERSHIP_IMAGE}
              alt="T1 Auton myyntipiha ja vaihtoautot"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 58vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

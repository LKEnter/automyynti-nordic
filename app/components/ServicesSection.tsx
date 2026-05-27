import Link from "next/link";
import Button from "./Button";
import { sectionH2Class } from "../lib/sectionTypography";

type Service = {
  title: string;
  subtitle?: string;
  icon: string; // public path
  href?: string;
  image: string; // public path
};

const SERVICES: Service[] = [
  {
    title: "Moottorihuolto",
    icon: "/icons/diagnostic.svg",
    href: "#",
    image: "/assets/services/air-service.jpg",
  },
  {
    title: "Jarrujen tarkastus ja huolto",
    icon: "/icons/brake.svg",
    href: "#",
    image: "/assets/services/brake-service.jpg",
  },
  {
    title: "Öljynvaihto",
    icon: "/icons/battery.svg",
    href: "#",
    image: "/assets/services/diagnostic-service.jpg",
  },
  {
    title: "Ilmastoinnin suorituskyky ja huolto",
    icon: "/icons/fan.svg",
    href: "#",
    image: "/assets/services/suspension-service.jpg",
  },
];

function ServiceCard({ service }: { service: Service }) {
  const CardTag = service.href ? Link : "div";
  const cardProps = service.href ? ({ href: service.href } as const) : ({} as const);

  return (
    <CardTag
      {...(cardProps as any)}
      className="group relative isolate block min-h-[320px] overflow-hidden rounded-4xl bg-black shadow-none outline-none transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 sm:min-h-[360px]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${service.image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-black/10" aria-hidden />
      <div className="absolute inset-0 ring-1 ring-white/10" aria-hidden />

      <div className="relative flex h-full flex-col p-6">
        <div className="flex items-center gap-3">
          <div className="grid size-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
            <img src={service.icon} alt="" className="size-7 invert opacity-95" />
          </div>
          <div className="min-w-0">
            <p className="m-0 font-heading text-lg font-semibold uppercase leading-tight tracking-wide text-white">
              {service.title}
            </p>
            {service.subtitle ? (
              <p className="m-0 mt-1 text-sm font-semibold uppercase tracking-wide text-white/85">{service.subtitle}</p>
            ) : null}
          </div>
        </div>

        <span className="pointer-events-none absolute bottom-[-1px] right-[-1px] inline-flex items-center rounded-tl-3xl bg-white px-10 py-5 text-base font-semibold tracking-tight text-[var(--color-foreground)] shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
          Varaa
        </span>
      </div>
    </CardTag>
  );
}

export default function ServicesSection() {
  return (
    <section id="palvelut" className="w-full bg-white py-14 md:py-20" aria-label="Palvelut">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <h2 className={sectionH2Class}>
              Palvelut
            </h2>
            <p className="m-0 mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
              Huollamme ja korjaamme yleisimmät viat nopeasti ja läpinäkyvästi. Varaa aika tai pyydä arvio — vastaamme yleensä saman työpäivän aikana.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Button href="#" variant="primary">
              Näytä kaikki
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <ServiceCard key={`${s.title}-${s.subtitle ?? ""}`} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}


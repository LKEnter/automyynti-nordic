import Image from "next/image";
import { sectionH2FlankedClass, sectionLedeClass } from "../lib/sectionTypography";

type RecentCase = {
  carModel: string;
  service: string;
  imageSrc: string;
  imageAlt: string;
};

const CASES: RecentCase[] = [
  {
    carModel: "BMW 530d (2018)",
    service: "SÄHKÖDIAGNOSTIIKKA",
    imageSrc: "/assets/recents/bmw.jpg",
    imageAlt: "Moottoritilan tarkastus huollon yhteydessä",
  },
  {
    carModel: "Volkswagen Golf (2017)",
    service: "MÄÄRÄAIKAISHUOLTO",
    imageSrc: "/assets/recents/brake.jpg",
    imageAlt: "Jarrujen huolto ja vaihto",
  },
  {
    carModel: "Mercedes-Benz C200 (2019)",
    service: "MOOTTORIDIAGNOSTIIKKA",
    imageSrc: "/assets/recents/enginebay.jpg",
    imageAlt: "Diagnostiikka ja moottorin tarkastus",
  },
  {
    carModel: "Volvo XC60 (2020)",
    service: "ILMASTOINTIHUOLTO",
    imageSrc: "/assets/recents/ac.jpg",
    imageAlt: "Ilmastoinnin huolto auton ohjauspaneelista",
  },
];

function RecentCard({ item, index }: { item: RecentCase; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className="group w-full min-w-0"
    >
      <div className="relative w-full min-w-0 overflow-hidden rounded-2xl bg-[var(--color-secondary)]">
        <div className="relative aspect-[5/3] w-full">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="object-cover saturate-[0.92] contrast-[0.98] transition duration-500 ease-out group-hover:scale-[1.05] group-hover:saturate-100 group-hover:contrast-100"
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="m-0 font-mono text-[0.72rem] font-medium tracking-[0.16em] text-black/45 transition-colors duration-300 group-hover:text-black/60">
          {number} / {item.service}
        </p>
        <p className="m-0 mt-1 text-sm font-semibold tracking-tight text-[var(--color-foreground)]/85 transition-colors duration-300 group-hover:text-[var(--color-foreground)]">
          {item.carModel}
        </p>
      </div>
    </article>
  );
}

export default function RecentSection() {
  return (
    <section id="recent-work" className="w-full bg-[var(--color-secondary)] py-14 md:py-20" aria-label="Viimeaikaisia töitä">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <header className="w-full text-center">
          <div className="mt-4 flex w-full items-center text-center gap-3 md:gap-4">
            <h2 className={sectionH2FlankedClass}>
              Viimeaikaisia <span className="text-[var(--color-accent)]">huoltoja</span>
            </h2>
          </div>
          <p className={`${sectionLedeClass} mx-auto text-center`}>
            Esimerkkejä huolloista ja korjauksista, joita olemme toteuttaneet asiakkaillemme.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-12">
          {CASES.map((item, i) => (
            <RecentCard key={`${item.carModel}-${item.service}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}


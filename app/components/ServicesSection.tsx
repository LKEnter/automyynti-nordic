import Image from "next/image";
import Button from "./Button";
import { sectionH2CenterClass, sectionLedeCenterClass } from "../lib/sectionTypography";

type Service = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  cta: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    title: "Tarkastetut vaihtoautot",
    description:
      "Valikoimastamme löydät huolella tarkastettuja vaihtoautoja. Jokainen auto valitaan kunnon, historian ja hinta-laatusuhteen perusteella.",
    imageSrc: "/assets/images/cars/mock-golf-blue.webp",
    imageAlt: "Tarkastettu vaihtoauto Automyynti Nordicin valikoimassa",
    cta: "Tutustu valikoimaan",
    href: "#autot",
  },
  {
    title: "Etsimme juuri oikean auton",
    description:
      "Jos et löydä sopivaa autoa valikoimastamme, etsimme sen puolestasi. Kerro toiveesi, niin käytämme kokemustamme löytääksemme juuri sinulle sopivan auton.",
    imageSrc: "/assets/images/services/buy-in.jpg",
    imageAlt: "Asiakas keskustelemassa auton ostosta",
    cta: "Kerro millaista autoa etsit",
    href: "#contact",
  },
  {
    title: "Vaihtoauto vastaanotetaan",
    description:
      "Arvioimme nykyisen autosi nopeasti ja reilusti. Vaihtoauto voidaan hyödyntää osana seuraavan autosi hankintaa.",
    imageSrc: "/assets/images/services/fair-trade-in.jpg",
    imageAlt: "Vaihtoauton arviointi",
    cta: "Pyydä arvio vaihtoautosta",
    href: "#contact",
  },
  {
    title: "Joustava rahoitus",
    description:
      "Vertailemme vaihtoehdot useilta rahoituskumppaneilta ja tarjoamme kilpailukykyisen ratkaisun niin yksityisille kuin yrityksille.",
    imageSrc: "/assets/financing.jpg",
    imageAlt: "Rahoitusneuvottelu autoliikkeessä",
    cta: "Kysy rahoituksesta",
    href: "#rahoitus",
  },
  {
    title: "Auto valmiina heti käyttöön",
    description:
      "Huolehdimme siitä, että autosi on viimeistelty ja valmis heti kaupanteon jälkeen — nouda liikkeestämme tai sovi toimituksesta.",
    imageSrc: "/assets/images/services/delivery.png",
    imageAlt: "Auto valmiina luovutukseen",
    cta: "",
    href: "#contact",
  },
];

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const imageLeft = index % 2 === 0;

  return (
    <article
      className={["flex flex-col items-center gap-10 md:gap-14 xl:gap-20", imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"].join(
        " ",
      )}
    >
      <div className="w-full flex-1 overflow-hidden rounded-[20px]">
        <div className="relative aspect-[16/10]">
          <Image
            src={service.imageSrc}
            alt={service.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="h-full flex-1 border-b border-[var(--color-border)] pb-12 md:border-t md:py-16">
        <h3 className="font-heading text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] md:text-4xl">
          {service.title}
        </h3>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">{service.description}</p>

        {service.cta ? (
          <div className="mt-8">
            <Button href={service.href} variant="primary">
              {service.cta}
            </Button>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section id="palvelut" className="border-t border-[var(--color-border)] py-16 md:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <header className="mx-auto mb-20 max-w-2xl text-center md:mb-0">
          <h2 id="services-heading" className={sectionH2CenterClass}>
            Miten voimme auttaa?
          </h2>
          <p className={sectionLedeCenterClass}>
            Autokauppaa kokonaispalveluna. Huolehdimme jokaisesta vaiheesta aina oikean auton löytämisestä sen
            turvalliseen luovutukseen.
          </p>
        </header>

        <div className="mt-12 space-y-14 md:mt-20 md:space-y-24">
          {SERVICES.map((service, index) => (
            <ServiceRow key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

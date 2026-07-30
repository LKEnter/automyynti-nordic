import Image from "next/image";
import Button from "./Button";

const CTA_IMAGE = "/assets/images/hero-showroom.webp";

export default function CtaSection() {
  return (
    <section className="w-full bg-white px-3 pt-12 pb-[3.75rem] md:px-5 md:pt-16 md:pb-[5.25rem]" aria-label="Löydetään sinulle oikea auto">
      <div className="relative mx-auto min-h-[420px] max-w-[1440px] overflow-hidden rounded-[2rem] md:min-h-[480px] md:rounded-[2.5rem]">
        <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
          <Image
            src={CTA_IMAGE}
            alt="T1 Auton myyntipiha"
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-center brightness-[0.45] contrast-[1.05]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" aria-hidden />
        </div>

        <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-8 md:min-h-[480px] md:p-14 lg:p-16">
          <h2 className="font-heading m-0 max-w-xl text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:max-w-2xl md:text-5xl">
            Löydetään sinulle
            <br />
            oikea auto.
          </h2>

          <div className="mt-auto flex flex-col items-start gap-6 md:mt-0 md:max-w-md md:items-end md:self-end md:text-right">
            <p className="m-0 text-sm font-medium leading-relaxed text-white/75">
              Etsitpä kaupunkiautoa, perheautoa tai jotain tavallisesta poikkeavaa — autamme löytämään vaihtoehdon,
              joka vastaa tarpeitasi ja budjettiasi.
            </p>

            <Button href="#" variant="primary">
              Tutustu kokoelmaan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

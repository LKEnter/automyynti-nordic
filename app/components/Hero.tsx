import Image from "next/image";
import Button from "./Button";

const HERO_IMAGE_SRC = "/assets/images/hero-showroom.png";

export default function Hero() {
  return (
    <section className="w-full bg-white py-0 md:py-20 lg:py-6">
      <div className="mx-auto grid max-w-none grid-cols-1 items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16 h-[90svh]">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading m-0 mt-4 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
            Autoilu alkaa hyvästä kaupasta.
          </h1>

          <p className="m-0 mt-5 max-w-md text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Huolella valittuja vaihtoautoja, joustava rahoitus ja rehellinen palvelu Raumalla.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#autot" variant="primary">
              Katso autot
            </Button>
            <Button href="#rahoitus" variant="secondary">
              Hae rahoitusta
            </Button>
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-[20px] bg-[var(--color-secondary)] shadow-[0_8px_32px_rgba(0,0,0,0.08)] sm:min-h-[360px] lg:min-h-[440px] h-full">
          <Image
            src={HERO_IMAGE_SRC}
            alt="T1 Auton vaihtoautoja myyntipihalla"
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

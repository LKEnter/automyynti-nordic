import Image from "next/image";
import Button from "./Button";

const HERO_VIDEO_SRC = "/assets/videos/hero.mp4";
const HERO_POSTER_SRC = "/assets/services-card.png";

export default function Hero() {
  return (
    <section className="relative flex h-svh max-h-svh min-h-[100vh] w-full flex-col overflow-hidden bg-white md:block">
      {/* Right: video / mobile poster (skewed mask on md+) */}
      <div className="hero-clip-right relative flex-1 bg-[var(--color-secondary)] md:absolute md:inset-0 md:h-full">
        {/* Poster fallback (sits behind the video) */}
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={HERO_POSTER_SRC}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw, 42vw"
            priority
          />
        </div>

        {/* Looping video (mobile + desktop) */}
        <video
          className="absolute inset-0 z-[1] h-full w-full object-cover"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controls={false}
          preload="metadata"
          poster={HERO_POSTER_SRC}
        />

        {/* Readability: top gradient for nav + overall tint */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-black/45 to-transparent md:h-36"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/[0.12]" aria-hidden />
      </div>

      {/* Left: copy + CTA (skewed edge on the right from md up) */}
      <div className="hero-clip-left relative z-10 flex shrink-0 flex-col bg-white px-6 pb-10 pt-8 sm:px-10 md:absolute md:inset-y-0 md:left-0 md:flex-none md:h-full md:w-[58%] md:max-w-[52rem] md:justify-center md:px-14 md:pb-10 md:pt-28 lg:px-20">
        <h1 className="m-0 mt-4 max-w-xl font-heading text-4xl font-bold leading-[1.08] tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
          Huolto ja korjaus ilman arvailua
        </h1>

        <p className="m-0 mt-5 max-w-md text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
          Määräaikaishuollot, diagnostiikka ja korjaukset yhdellä käynnillä. Kerromme mitä tehdään, milloin auto on
          valmis ja mitä se maksaa.
        </p>

        <div className="mt-8">
          <Button href="#" variant="primary" className="transition-all duration-300 hover:scale-105">
            Varaa huoltoaika
          </Button>
        </div>
      </div>
    </section>
  );
}

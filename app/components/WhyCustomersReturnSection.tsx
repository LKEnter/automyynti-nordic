"use client";

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconStar } from "./icons";
import { sectionEyebrowClass } from "../lib/sectionTypography";

const REDUCE_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeMediaQuery(query: string, cb: () => void) {
  const m = window.matchMedia(query);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
}

function getSnapshot(query: string) {
  return window.matchMedia(query).matches;
}

function getServerSnapshot() {
  return false;
}

const TESTIMONIALS = [
  {
    text: "Ostin auton Tanelilta ja auto oli erittäin hyvä ja myyjä antoi reilun alennuksen sekä toi sen ilmaiseksi Helsinkiin minulle. Jäi erittäin hyvä mieli kaupoista sekä asiakaspalvelu oli erittäin hyvää.",
    author: "Nikolai Saari",
    source: "2 kuukautta sitten",
  },
  {
    text: "Kaupat sujui helposti ja joustavasti. Hyvää palvelua kaiken kaikkiaan. Suosittelut 👍",
    author: "Aleksi Myllymäki",
    source: "kuukausi sitten",
  },
  {
    text: "Luotettavaa ja asiantuntevaa palvelua. Yhteydenpito nopeaa ja joustavaa. Asiakasta kunnioittavaa palvelua, kärsivällisyyttä riitti ja erittäin ystävällinen palvelu. Kiitos positiivisesta kokemuksesta, lämpimät suositukset! ☺️👍🏻",
    author: "Jade",
    source: "2 vuotta sitten",
  },
  {
    text: "Todella hyvää asiakaspalvelua. Luotettava myyjä sain kaikkiin kysymyksiini luotettavat vastaukset.",
    author: "Leevi",
    source: "vuosi sitten",
  },
  {
    text: "Taneli oli mukava ja oli kärsivällinen meidän kysymyspatterista huolimatta. Kaupankäynti oli rentoa ja kiireettömän tuntuista. Auto oli mitä ilmoituksessa luvattiin. Kaupat tehtiin ja ollaan tyytyväisiä. Ostaisin uudestaan auton Tanelilta.",
    author: "Teemu Koskinen",
    source: "2 vuotta sitten",
  },
  {
    text: "Tyttäreni osti tästä liikkeestä Clion. Myyjä jousti aikataulujamme hyvin kun olimme myöhässä, lisäksi koko prosessi meni loistavasti. Suuret kiitokset!",
    author: "Sirpa Parviainen",
    source: "3 vuotta sitten",
  },
  {
    text: "Kauppa osti meiltä auton. Kaupat sujui hyvin, ja myyjä oli ymmärtäväinen meidän mokista huolimatta. ☺️ Suosittelen.",
    author: "Iina Wallenius",
    source: "vuosi sitten",
  },
  {
    text: "Luonnikas palvelu. Nopea apu akuuttiin tarpeeseen ammattitaitoisesti ja nopealla aikataululla.",
    author: "Jasmin Määttä",
    source: "2 vuotta sitten",
  },
] as const;

function StarRow({ className = "" }: { className?: string }) {
  return (
    <div className={["flex items-center gap-0.5 text-[var(--color-accent)]", className].join(" ")} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="size-4 shrink-0" />
      ))}
    </div>
  );
}

export default function WhyCustomersReturnSection() {
  const reduceMotion = useSyncExternalStore(
    (cb) => subscribeMediaQuery(REDUCE_MOTION_QUERY, cb),
    () => getSnapshot(REDUCE_MOTION_QUERY),
    getServerSnapshot,
  );
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const count = TESTIMONIALS.length;
  const item = TESTIMONIALS[active];

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setActive((i) => (i + dir + count) % count);
    },
    [count],
  );

  const goPrev = useCallback(() => go(-1), [go]);
  const goNext = useCallback(() => go(1), [go]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [goNext, goPrev],
  );

  const motion = useMemo(() => {
    if (reduceMotion) return { transition: "none", transform: "none", opacity: 1 };
    if (!mounted) return { transition: "none", transform: "none", opacity: 1 };
    const x = direction === 1 ? 10 : -10;
    return {
      transition: "opacity 420ms ease, transform 420ms ease",
      transform: `translate3d(${x}px, 0, 0)`,
      opacity: 1,
    };
  }, [direction, mounted, reduceMotion]);

  return (
    <section id="arvostelut" className="w-full bg-white py-16 md:py-24" aria-label="Miksi asiakkaat palaavat">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className={sectionEyebrowClass}>Asiakaskokemus</p>
            <h2 className="font-heading m-0 mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl">
              Palvelua, jonka vuoksi asiakkaat palaavat.
            </h2>
            <p className="m-0 mt-4 max-w-md text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              Moni asiakkaamme palaa uudelleen — ja suosittelee meitä eteenpäin. Se on paras mittari siitä, että
              teemme asiat oikein.
            </p>

            <div
              className="relative mt-8 w-full max-w-xl rounded-[20px] bg-[var(--color-secondary)] px-6 py-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:px-8 sm:py-10"
              tabIndex={0}
              onKeyDown={onKeyDown}
            >
              <StarRow className="mx-auto mb-4 justify-center" />

              <div key={active} className="will-change-transform" style={motion}>
                <p className="m-0 text-balance font-heading text-base font-semibold leading-relaxed tracking-tight text-[var(--color-foreground)] sm:text-lg">
                  “{item.text}”
                </p>
                <p className="m-0 mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  {item.author} <span className="mx-2 text-[var(--color-muted)]/50">•</span> {item.source}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  className="grid size-8 place-items-center rounded-full border border-black/10 bg-white text-[var(--color-foreground)] transition hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/40"
                  aria-label="Edellinen arvostelu"
                >
                  <ChevronLeft className="size-4" strokeWidth={2} />
                </button>

                <div className="flex items-center justify-center gap-2" aria-label="Arvostelujen sivutus">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setDirection(i > active ? 1 : -1);
                        setActive(i);
                      }}
                      className={[
                        "h-1.5 w-6 rounded-full transition",
                        i === active ? "bg-[var(--color-accent)]" : "bg-black/15 hover:bg-black/25",
                      ].join(" ")}
                      aria-label={`Näytä arvostelu ${i + 1}`}
                      aria-current={i === active ? "true" : undefined}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  className="grid size-8 place-items-center rounded-full border border-black/10 bg-white text-[var(--color-foreground)] transition hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/40"
                  aria-label="Seuraava arvostelu"
                >
                  <ChevronRight className="size-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[20px] bg-[var(--color-secondary)] shadow-[0_8px_32px_rgba(0,0,0,0.08)] sm:min-h-[360px] lg:min-h-[420px]">
            <Image
              src="/assets/images/delivery-handover.png"
              alt="Asiakas vastaanottamassa uuden auton avaimet"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

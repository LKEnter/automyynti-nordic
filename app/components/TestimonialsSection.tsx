"use client";

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconStar } from "./icons";

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
    text: "Loistava palvelu ja rehellinen arvio. Aamulla varaus, auto valmis iltapäivällä. Suosittelen.",
    author: "Mika L.",
    source: "Google-arvostelu",
  },
  {
    text: "Ammattitaitoista työtä ja selkeä viestintä koko ajan. Hinta piti kutinsa — tulen varmasti uudelleen.",
    author: "Laura K.",
    source: "Google-arvostelu",
  },
  {
    text: "Paras korjaamo pitkään aikaan. Mukava porukka ja kohtuullinen hinnoittelu. Kiitos nopeasta avusta!",
    author: "Jari H.",
    source: "Google-arvostelu",
  },
  {
    text: "Huolto tehtiin sovitusti ja minulle näytettiin mitä on tehty. Luottamus on ansaittu.",
    author: "Sanna T.",
    source: "Google-arvostelu",
  },
  {
    text: "Vikakoodi selvitettiin nopeasti ja auto toimii taas täydellisesti. Asiakaspalvelu erinomaisella tasolla.",
    author: "Petri N.",
    source: "Google-arvostelu",
  },
  {
    text: "Renkaiden vaihto ja tasapainotus sujui odottamatta samana päivänä. Suosittelen lämpimästi.",
    author: "Elina R.",
    source: "Google-arvostelu",
  },
] as const;

function StarRow({ className = "" }: { className?: string }) {
  return (
    <div className={["flex items-center gap-0.5 text-[var(--color-accent)]", className].join(" ")} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="size-4 shrink-0 md:size-[1.05rem]" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
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
    <section id="arvostelut" className="w-full bg-black" aria-label="Asiakasarvostelut">
      <div
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: "url(/assets/services/maintenance-service.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/55 to-black/75" aria-hidden />

        <div className="relative mx-auto flex max-w-[1200px] items-center justify-center px-4 py-24 text-center md:px-8 md:py-36">
          <div className="w-full max-w-3xl" tabIndex={0} onKeyDown={onKeyDown}>
            <StarRow className="mx-auto mb-4 justify-center text-[#f4c542]" />

            <div
              key={active}
              className="will-change-transform"
              style={{
                ...motion,
              }}
            >
              <p className="m-0 text-balance font-heading text-lg font-semibold leading-relaxed tracking-tight text-white sm:text-xl md:text-2xl">
                “{item.text}”
              </p>
              <p className="m-0 mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                {item.author} <span className="mx-2 text-white/40">•</span> {item.source}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                className="grid size-8 place-items-center rounded-full border border-white/20 bg-black/25 text-white/90 backdrop-blur-sm transition hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Edellinen arvostelu"
              >
                <ChevronLeft className="size-5" strokeWidth={2} />
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
                      i === active ? "bg-white/85" : "bg-white/25 hover:bg-white/40",
                    ].join(" ")}
                    aria-label={`Näytä arvostelu ${i + 1}`}
                    aria-current={i === active ? "true" : undefined}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                className="grid size-8 place-items-center rounded-full border border-white/20 bg-black/25 text-white/90 backdrop-blur-sm transition hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Seuraava arvostelu"
              >
                <ChevronRight className="size-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


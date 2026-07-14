import Image from "next/image";
import { Check } from "lucide-react";

const PROMISES = [
  "Tarkastetut autot",
  "Selkeä hinnoittelu",
  "Joustava rahoitus",
  "Yksi yhteyshenkilö",
] as const;

export default function PromiseSection() {
  return (
    <section className="w-full bg-[var(--color-secondary)] py-16 md:py-24" aria-label="Lupauksemme">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,4fr)_minmax(0,3fr)] lg:gap-12">
          <div>
            <h2 className="font-heading m-0 mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl">
              Näin autokaupan kuuluu toimia.
            </h2>
            <p className="m-0 mt-4 max-w-md text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              Ei turhaa myyntipuhetta. Kerromme auton kunnon rehellisesti, autamme sopivan vaihtoehdon löytämisessä ja
              hoidamme myös rahoituksen saman katon alla.
            </p>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[20px] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] sm:min-h-[340px] lg:min-h-[380px]">
            <Image
              src="/assets/images/car-inspect.jpg"
              alt="Asiakas tarkastamassa autoa"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 33vw"
            />
          </div>

          <ul className="m-0 flex flex-col gap-5 p-0">
            {PROMISES.map((promise) => (
              <li key={promise} className="flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <Check className="size-4" strokeWidth={2.5} aria-hidden />
                </span>
                <span className="text-base font-semibold text-[var(--color-foreground)]">{promise}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

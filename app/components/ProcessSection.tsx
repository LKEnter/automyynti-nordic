import type { LucideIcon } from "lucide-react";
import { CarFront, CircleCheck, ClipboardList, Phone } from "lucide-react";
import { ServiceMark } from "./ServiceMark";
import { sectionH2FlankedClass, sectionLedeClass } from "../lib/sectionTypography";

type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const STEPS: ProcessStep[] = [
  {
    title: "Ota yhteyttä",
    description: "Kerro auton ongelmasta puhelimitse tai lomakkeella.",
    icon: Phone,
  },
  {
    title: "Tuo auto huoltoon",
    description: "Sovimme ajan ja käymme tilanteen läpi yhdessä.",
    icon: CarFront,
  },
  {
    title: "Diagnostiikka ja arvio",
    description: "Selvitämme vian ja kerromme korjauksen ennen työn aloittamista.",
    icon: ClipboardList,
  },
  {
    title: "Auto takaisin ajoon",
    description: "Työ valmistuu sovitusti ja auto on valmis noudettavaksi.",
    icon: CircleCheck,
  },
];

function StepNumber({ n }: { n: number }) {
  return (
    <span
      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-black/12 bg-white font-heading text-xs font-semibold tabular-nums text-[var(--color-primary)] shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:size-10 md:text-sm"
      aria-hidden
    >
      {n}
    </span>
  );
}

export default function ProcessSection() {
  return (
    <section
      id="huoltopolku"
      className="w-full bg-[var(--color-secondary)] py-14 md:py-20"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <header className="w-full text-center">
          <div className="mt-1 flex w-full items-center gap-3 md:gap-4">
            <span className="max-md:hidden h-px min-h-px min-w-[1rem] flex-1 bg-black/15 self-center" aria-hidden />
            <h2 id="process-heading" className={`${sectionH2FlankedClass} shrink-0`}>
              Näin <span className="text-[var(--color-accent)]">huolto etenee</span>
            </h2>
            <span className="max-md:hidden h-px min-h-px min-w-[1rem] flex-1 bg-black/15 self-center" aria-hidden />
          </div>
          <p className={`${sectionLedeClass} mx-auto text-center`}>Neljä selkeää askelta, jotta molemmat tietää missä mennään</p>
        </header>

        <ol className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="flex min-w-0 flex-col items-center rounded-xl border border-black/10 bg-white px-5 py-6 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <StepNumber n={i + 1} />
              <div className="mt-5">
                <ServiceMark icon={step.icon} />
              </div>
              <h3 className="m-0 mt-3 max-w-[16ch] font-heading text-sm font-semibold uppercase leading-snug tracking-wide text-[var(--color-primary)] md:text-[0.95rem]">
                {step.title}
              </h3>
              <p className="m-0 mt-2 max-w-[30ch] text-xs leading-relaxed text-[var(--color-muted)] md:text-sm">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


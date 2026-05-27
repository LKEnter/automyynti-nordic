import Button from "./Button";
import { sectionH2Class, sectionLedeClass } from "../lib/sectionTypography";

export default function CtaBanner() {
  return (
    <section className="w-full bg-[var(--background)]" aria-label="Varaa huoltoaika">
      <div
        className="relative w-full overflow-hidden md:py-64 py-48"
        style={{
          backgroundImage: "url(/assets/services/tire-service.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Section above (secondary) → transparent → section below (white) */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, var(--color-secondary) 0%, color-mix(in srgb, var(--color-secondary) 25%, transparent) 28%, transparent 50%, color-mix(in srgb, var(--background) 25%, transparent) 72%, var(--background) 100%)`,
          }}
          aria-hidden
        />

        <div className="relative mx-auto w-fit rounded-3xl bg-white px-16 py-10 text-center">
          <h2 className={`${sectionH2Class} text-balance`}>
            Varaa huoltoaika
          </h2>
          <p className={`${sectionLedeClass} mx-auto`}>
            Nopea varaus ja selkeä arvio.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <Button href="#" variant="primary">
              Varaa huoltoaika
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

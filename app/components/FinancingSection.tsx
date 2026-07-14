"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import Button from "./Button";
import { sectionH2Class, sectionLedeClass } from "../lib/sectionTypography";

const FINANCING_IMAGE = "/assets/financing.jpg";

const ANNUAL_RATE = 0.079;

type SliderFieldProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (value: number) => void;
};

function SliderField({ id, label, value, min, max, step, display, onChange }: SliderFieldProps) {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white/90">
        {label}
      </label>
      <p className="m-0 mt-1 font-heading text-2xl font-extrabold tracking-tight text-white">{display}</p>

      <div className="relative mt-4">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="financing-slider w-full"
          style={
            {
              "--slider-progress": `${percent}%`,
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}

function formatCurrency(value: number): string {
  return `${value.toLocaleString("fi-FI", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}

function calculateMonthlyPayment(principal: number, months: number, annualRate: number): number {
  if (principal <= 0 || months <= 0) return 0;
  const monthlyRate = annualRate / 12;
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
}

export default function FinancingSection() {
  const [carPrice, setCarPrice] = useState(17900);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [termMonths, setTermMonths] = useState(48);

  const { downPayment, monthlyPayment } = useMemo(() => {
    const down = Math.round((carPrice * downPaymentPercent) / 100);
    const financed = carPrice - down;
    const monthly = calculateMonthlyPayment(financed, termMonths, ANNUAL_RATE);
    return {
      downPayment: down,
      monthlyPayment: Math.round(monthly * 100) / 100,
    };
  }, [carPrice, downPaymentPercent, termMonths]);

  return (
    <section id="rahoitus" className="w-full bg-[var(--color-secondary)] py-14 md:py-20" aria-label="Rahoitus">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <header className="mb-10 max-w-2xl">
          <h2 className={sectionH2Class}>Rahoituslaskuri</h2>
          <p className={sectionLedeClass}>
            Laske arvio kuukausierästä ja pyydä tarjous — selkeästi ja ilman sitoumuksia.
          </p>
        </header>

        <div className="overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] lg:grid lg:grid-cols-2">
          {/* Calculator */}
          <div className="flex flex-col bg-[var(--color-foreground)] px-6 py-8 sm:px-10 sm:py-10 lg:min-h-[520px]">
            <h3 className="m-0 font-heading text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              Laske rahoitus
            </h3>

            <div className="mt-8 flex flex-1 flex-col gap-8">
              <SliderField
                id="car-price"
                label="Auton hinta (€)"
                value={carPrice}
                min={3000}
                max={40000}
                step={500}
                display={`${carPrice.toLocaleString("fi-FI")} €`}
                onChange={setCarPrice}
              />
              <SliderField
                id="down-payment"
                label="Käsiraha (%)"
                value={downPaymentPercent}
                min={0}
                max={50}
                step={5}
                display={`${downPaymentPercent} %`}
                onChange={setDownPaymentPercent}
              />
              <SliderField
                id="term"
                label="Maksuaika (kk)"
                value={termMonths}
                min={12}
                max={72}
                step={6}
                display={`${termMonths} kk`}
                onChange={setTermMonths}
              />
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Plus className="size-4" aria-hidden />
              Lisätietoja
            </a>
          </div>

          {/* Results + image */}
          <div className="relative min-h-[360px] lg:min-h-[520px]">
            <Image
              src={FINANCING_IMAGE}
              alt="Asiakas keskustelemassa rahoituksesta"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20" aria-hidden />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10">
              <div className="w-full max-w-sm rounded-[20px] border border-white/15 bg-black/45 p-6 backdrop-blur-md sm:p-8">
                <div className="border-b border-white/10 pb-5">
                  <p className="m-0 text-sm text-white/70">Käsiraha</p>
                  <p className="m-0 mt-1 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {formatCurrency(downPayment)}
                  </p>
                </div>
                <div className="pt-5">
                  <p className="m-0 text-sm text-white/70">Kuukausierä</p>
                  <p className="m-0 mt-1 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {formatCurrency(monthlyPayment)}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
              <Button href="#contact" variant="primary" className="shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
                Pyydä tarjous →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

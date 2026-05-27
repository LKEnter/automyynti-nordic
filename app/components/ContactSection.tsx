"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { CONTACT, OPENING_HOURS } from "../lib/contact";
import Button from "./Button";
import { sectionH2Class } from "../lib/sectionTypography";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const fieldClass =
  "w-full border-0 border-b border-white/20 bg-transparent pb-3 pt-1 text-sm text-[#f5f5f5] outline-none transition-colors placeholder:text-white/35 focus:border-[var(--color-accent)]";

const labelClass = "mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#f5f5f5]/70";

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const updateField = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-[#1c1c1c]"
    >
      <div className="relative mx-auto max-w-[1680px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <h2
              id="contact-heading"
              className={`${sectionH2Class} max-w-xl text-white`}
            >
              Huolto ja korjaus alkavat yhteydenotolla.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#f5f5f5]/72 md:text-lg">
              Ota yhteyttä tai varaa huoltoaika — kerromme arvion ja vastaamme yleensä saman työpäivän aikana.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-8 w-[3px] shrink-0 bg-[var(--color-accent)]" aria-hidden />
              <h3 className="m-0 text-lg font-medium tracking-tight text-[#f5f5f5]">Yhteystiedot</h3>
            </div>

            <ul className="m-0 mt-6 list-none space-y-3 p-0 text-sm text-[#f5f5f5]/88">
              <li>
                <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Phone className="size-4 text-[#f5f5f5]/70" aria-hidden />
                  {CONTACT.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="inline-flex items-center gap-2 break-all transition-colors hover:text-white"
                >
                  <Mail className="size-4 text-[#f5f5f5]/70" aria-hidden />
                  {CONTACT.emailLabel}
                </a>
              </li>
              <li className="text-[#f5f5f5]/72">
                <a href={CONTACT.mapHref} className="transition-colors hover:text-white">
                  <span className="block text-[#f5f5f5]/88">{CONTACT.addressLine1}</span>
                  <span className="block">{CONTACT.addressLine2}</span>
                </a>
              </li>
            </ul>

            <div className="mt-10">
              <div className="flex items-center gap-3">
                <span className="h-8 w-[3px] shrink-0 bg-[var(--color-accent)]" aria-hidden />
                <h3 className="m-0 text-lg font-medium tracking-tight text-[#f5f5f5]">Aukioloajat</h3>
              </div>
              <ul className="m-0 mt-5 list-none space-y-3 p-0">
                {OPENING_HOURS.map(({ day, hours }) => (
                  <li
                    key={day}
                    className="flex items-baseline justify-between gap-6 border-b border-white/[0.08] pb-3 text-sm text-[#f5f5f5]/88 last:border-0"
                  >
                    <span>{day}</span>
                    <span className="text-[#f5f5f5]/60">{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-16">
          {sent ? (
            <div className="rounded-2xl border border-white/[0.08] bg-black/45 p-8 text-center backdrop-blur-md md:p-12">
              <p className="m-0 font-heading text-xl font-semibold text-[#f5f5f5]">Kiitos viestistä!</p>
              <p className="m-0 mt-3 text-sm leading-relaxed text-[#f5f5f5]/72">
                Tämä on demo: lomake ei lähetä tietoja minnekään. Tuotannossa kytketään sähköpostiin tai CRM:ään.
              </p>
              <Button
                type="button"
                variant="secondary"
                className="mt-8"
                onClick={() => {
                  setSent(false);
                  setForm(initialForm);
                }}
              >
                Lähetä uusi viesti
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.08] bg-black/45 p-6 backdrop-blur-md md:p-10 lg:p-12"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Nimi
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={updateField("name")}
                    placeholder="Koko nimi"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className={labelClass}>
                    Puhelin
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={updateField("phone")}
                    placeholder="+358 …"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Sähköposti
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={updateField("email")}
                    placeholder="nimi@esimerkki.fi"
                    className={fieldClass}
                  />
                </div>

                <div className="md:col-span-3">
                  <label htmlFor="contact-message" className={labelClass}>
                    Viesti
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={updateField("message")}
                    placeholder="Lyhyt kuvaus viasta tai huollosta…"
                    className={`${fieldClass} min-h-[120px] resize-y`}
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" className="mt-10 w-full">
                Lähetä viesti
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

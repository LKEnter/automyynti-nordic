"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, OPENING_HOURS } from "../lib/contact";
import Button from "./Button";
import { sectionEyebrowClass, sectionH2Class, sectionLedeClass } from "../lib/sectionTypography";

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
  "w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-foreground)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15";

const labelClass = "mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]";

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
    <section id="contact" aria-labelledby="contact-heading" className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className={sectionEyebrowClass}>Yhteystiedot</p>
            <h2 id="contact-heading" className={`${sectionH2Class} max-w-xl`}>
              Ota yhteyttä — autamme mielellämme
            </h2>
            <p className={sectionLedeClass}>
              Kysy autosta, pyydä vaihtotarjous tai aloita rahoituksen haku. Vastaamme yleensä saman arkipäivän
              aikana.
            </p>

            <ul className="m-0 mt-8 list-none space-y-4 p-0">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-3 text-sm text-[var(--color-foreground)] no-underline transition hover:text-[var(--color-accent)]"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-[var(--color-secondary)]">
                    <Phone className="size-4 text-[var(--color-accent)]" aria-hidden />
                  </span>
                  {CONTACT.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="inline-flex items-center gap-3 break-all text-sm text-[var(--color-foreground)] no-underline transition hover:text-[var(--color-accent)]"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--color-secondary)]">
                    <Mail className="size-4 text-[var(--color-accent)]" aria-hidden />
                  </span>
                  {CONTACT.emailLabel}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.mapHref}
                  className="inline-flex items-center gap-3 text-sm text-[var(--color-foreground)] no-underline transition hover:text-[var(--color-accent)]"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--color-secondary)]">
                    <MapPin className="size-4 text-[var(--color-accent)]" aria-hidden />
                  </span>
                  <span className="flex flex-row flex-wrap items-center gap-x-1">
                    <span>{CONTACT.addressLine1}</span>
                    <span>{CONTACT.addressLine2}</span>
                  </span>
                </a>
              </li>
            </ul>

            <div className="mt-10">
              <p className="m-0 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                Aukioloajat
              </p>
              <ul className="m-0 mt-4 list-none space-y-2 p-0">
                {OPENING_HOURS.map(({ day, hours }) => (
                  <li
                    key={day}
                    className="flex items-baseline justify-between gap-6 border-b border-[var(--color-border)] pb-2 text-sm last:border-0"
                  >
                    <span className="text-[var(--color-foreground)]">{day}</span>
                    <span className="text-[var(--color-muted)]">{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="rounded-[20px] bg-[var(--color-secondary)] p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-12">
                <p className="m-0 font-heading text-xl font-bold text-[var(--color-foreground)]">Kiitos viestistä!</p>
                <p className="m-0 mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
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
                className="rounded-[20px] border border-[var(--color-border)] bg-[var(--color-secondary)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-8"
              >
                <div className="grid grid-cols-1 gap-5">
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

                  <div className="grid gap-5 sm:grid-cols-2">
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
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>
                      Viesti
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={updateField("message")}
                      placeholder="Kerro millaista autoa etsit tai mitä tarvitset…"
                      className={`${fieldClass} min-h-[120px] resize-y`}
                    />
                  </div>
                </div>

                <Button type="submit" variant="primary" className="mt-6 w-full">
                  Lähetä viesti
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

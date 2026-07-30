import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import { sectionH2Class, sectionLedeClass } from "../lib/sectionTypography";

type Vehicle = {
  make: string;
  model: string;
  trim: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  imageSrc: string;
  imageAlt: string;
};

/** Demo inventory only — mock photos + fictional listing data (not real stock). */
const VEHICLES: Vehicle[] = [
  {
    make: "Toyota",
    model: "Camry",
    trim: "2.5 Hybrid XSE, kaksivärinen",
    year: 2020,
    price: 24900,
    mileage: 98000,
    fuel: "Hybridi",
    transmission: "Automaatti",
    imageSrc: "/assets/images/cars/mock-sedan-silver.jpg",
    imageAlt: "Esimerkki: Toyota Camry",
  },
  {
    make: "Nissan",
    model: "Juke",
    trim: "1.0 DIG-T Tekna, kaksivärinen",
    year: 2021,
    price: 18900,
    mileage: 64000,
    fuel: "Bensiini",
    transmission: "Manuaali",
    imageSrc: "/assets/images/cars/mock-hatch-blue.jpg",
    imageAlt: "Esimerkki: Nissan Juke",
  },
  {
    make: "Honda",
    model: "CR-V",
    trim: "2.0 i-VTEC AWD Lifestyle",
    year: 2016,
    price: 16900,
    mileage: 142000,
    fuel: "Bensiini",
    transmission: "Automaatti",
    imageSrc: "/assets/images/cars/mock-suv-white.jpg",
    imageAlt: "Esimerkki: Honda CR-V",
  },
  {
    make: "Volkswagen",
    model: "Golf",
    trim: "1.4 TSI Comfortline",
    year: 2011,
    price: 6900,
    mileage: 168000,
    fuel: "Bensiini",
    transmission: "Manuaali",
    imageSrc: "/assets/images/cars/mock-golf-blue.webp",
    imageAlt: "Esimerkki: Volkswagen Golf",
  },
  {
    make: "Škoda",
    model: "Octavia",
    trim: "1.5 TSI Style Combi",
    year: 2018,
    price: 15900,
    mileage: 118000,
    fuel: "Bensiini",
    transmission: "Automaatti",
    imageSrc: "/assets/images/cars/mock-octavia-silver.webp",
    imageAlt: "Esimerkki: Škoda Octavia Combi",
  },
  {
    make: "BMW",
    model: "320i",
    trim: "Sedan Sport Line",
    year: 2015,
    price: 14900,
    mileage: 156000,
    fuel: "Bensiini",
    transmission: "Automaatti",
    imageSrc: "/assets/images/cars/mock-bmw-grey.webp",
    imageAlt: "Esimerkki: BMW 320i",
  },
  {
    make: "Ford",
    model: "Focus",
    trim: "1.0 EcoBoost Titanium",
    year: 2014,
    price: 7900,
    mileage: 134000,
    fuel: "Bensiini",
    transmission: "Manuaali",
    imageSrc: "/assets/images/cars/mock-focus-red.webp",
    imageAlt: "Esimerkki: Ford Focus",
  },
  {
    make: "Kia",
    model: "Sportage",
    trim: "1.6 T-GDI AWD GT-Line",
    year: 2018,
    price: 17900,
    mileage: 112000,
    fuel: "Bensiini",
    transmission: "Automaatti",
    imageSrc: "/assets/images/cars/mock-sportage-black.webp",
    imageAlt: "Esimerkki: Kia Sportage",
  },
];

function formatPrice(value: number): string {
  return new Intl.NumberFormat("fi-FI", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(
    value,
  );
}

function formatMileage(value: number): string {
  return `${new Intl.NumberFormat("fi-FI").format(value)} km`;
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={vehicle.imageSrc}
          alt={vehicle.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
          quality={65}
        />
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-foreground)] backdrop-blur-sm">
          {vehicle.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="m-0 font-heading text-lg font-bold tracking-tight text-[var(--color-foreground)]">
          {vehicle.make} {vehicle.model}
        </h3>
        <p className="m-0 mt-1 text-sm text-[var(--color-muted)]">{vehicle.trim}</p>

        <p className="m-0 mt-3 text-xs text-[var(--color-muted)]">
          {formatMileage(vehicle.mileage)}
          <span className="mx-1.5">·</span>
          {vehicle.fuel}
          <span className="mx-1.5">·</span>
          {vehicle.transmission}
        </p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <p className="m-0 font-heading text-xl font-extrabold tracking-tight text-[var(--color-foreground)]">
            {formatPrice(vehicle.price)}
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-white no-underline transition-colors hover:bg-[var(--color-brand-700)]"
          >
            Tutustu
            <ArrowRight
              className="ml-0 h-3.5 w-0 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 ease-out group-hover:ml-1.5 group-hover:w-3.5 group-hover:translate-x-0 group-hover:opacity-100"
              strokeWidth={2.5}
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function InventorySection() {
  return (
    <section id="autot" className="w-full bg-white py-16 md:py-24" aria-label="Vaihtoautot">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <header className="max-w-2xl">
            <h2 className={sectionH2Class}>Ajankohtainen valikoima</h2>
            <p className={sectionLedeClass}>
              Esimerkkivalikoima demoa varten — hinnoittelu ja kilometrit ovat kuvitteellisia.
            </p>
          </header>

          <Button href="#contact" variant="secondary" className="shrink-0">
            Näytä koko valikoima
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-4 lg:gap-6">
          {VEHICLES.map((vehicle) => (
            <VehicleCard key={`${vehicle.make}-${vehicle.model}-${vehicle.year}`} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}

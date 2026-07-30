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

const VEHICLES: Vehicle[] = [
  {
    make: "Volvo",
    model: "S40",
    trim: "Jakohihna vaihdettu, huollettu",
    year: 2011,
    price: 4090,
    mileage: 245700,
    fuel: "Diesel",
    transmission: "Manuaali",
    imageSrc: "/assets/images/cars/volvo-s40.webp",
    imageAlt: "Volvo S40",
  },
  {
    make: "Volkswagen",
    model: "Golf",
    trim: "Huollettu, mekatronikka ja kytkin vaihdettu",
    year: 2012,
    price: 6990,
    mileage: 143700,
    fuel: "Bensiini",
    transmission: "Automaatti",
    imageSrc: "/assets/images/cars/volkswagen-golf.webp",
    imageAlt: "Volkswagen Golf",
  },
  {
    make: "Volkswagen",
    model: "Eos",
    trim: "Jakoketju vaihdettu, nahka, lasikatto",
    year: 2006,
    price: 7590,
    mileage: 154000,
    fuel: "Bensiini",
    transmission: "Manuaali",
    imageSrc: "/assets/images/cars/volkswagen-eos.webp",
    imageAlt: "Volkswagen Eos",
  },
  {
    make: "Nissan",
    model: "Note",
    trim: "1.4 Select Edition",
    year: 2011,
    price: 3790,
    mileage: 179500,
    fuel: "Bensiini",
    transmission: "Manuaali",
    imageSrc: "/assets/images/cars/nissan-note.webp",
    imageAlt: "Nissan Note",
  },
  {
    make: "Nissan",
    model: "Almera",
    trim: "1.5 Business+ Sedan",
    year: 2004,
    price: 1290,
    mileage: 299000,
    fuel: "Bensiini",
    transmission: "Manuaali",
    imageSrc: "/assets/images/cars/nissan-almera.webp",
    imageAlt: "Nissan Almera",
  },
  {
    make: "Ford",
    model: "Fiesta",
    trim: "2.0 ST 110kW",
    year: 2008,
    price: 3790,
    mileage: 261150,
    fuel: "Bensiini",
    transmission: "Manuaali",
    imageSrc: "/assets/images/cars/ford-fiesta.webp",
    imageAlt: "Ford Fiesta",
  },
  {
    make: "Chevrolet",
    model: "Volt",
    trim: "Nahka, xenon, avaimeton kulku",
    year: 2013,
    price: 6690,
    mileage: 141200,
    fuel: "Bensiini",
    transmission: "Automaatti",
    imageSrc: "/assets/images/cars/chevrolet-volt.webp",
    imageAlt: "Chevrolet Volt",
  },
  {
    make: "Alfa Romeo",
    model: "Giulietta",
    trim: "Siisti, rahoitus 3,99 %",
    year: 2011,
    price: 5090,
    mileage: 189500,
    fuel: "Bensiini",
    transmission: "Manuaali",
    imageSrc: "/assets/images/cars/alfa-giu.webp",
    imageAlt: "Alfa Romeo Giulietta",
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
              Kaikki automme on tarkastettu ja hinnoiteltu selkeästi — yksilömme vaihtuvassa valikoimassa.
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

/** Shared contact details */
export const CONTACT = {
  phoneLabel: "09 884 2635",
  phoneHref: "tel:+35898842635",
  emailLabel: "tuomo.saaristo@matinkylanauto.fi",
  emailHref: "mailto:tuomo.saaristo@matinkylanauto.fi",
  addressLine1: "Hannuksenpelto 4",
  addressLine2: "02270 Espoo",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Hannuksenpelto+4%2C+02270+Espoo%2C+Suomi",
} as const;

export const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Hannuksenpelto+4,+02270+Espoo,+Suomi&output=embed&z=15";

export const OPENING_HOURS = [
  { day: "Ma–Pe", hours: "07:30–17:00" },
  { day: "La–Su", hours: "Suljettu" },
] as const;

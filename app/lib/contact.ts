/** Shared contact details — fictional demo identity */
export const CONTACT = {
  phoneLabel: "040 000 0001",
  phoneHref: "tel:+358400000001",
  emailLabel: "info@automyynti-nordic.fi",
  emailHref: "mailto:info@automyynti-nordic.fi",
  addressLine1: "Esimerkkikatu 1",
  addressLine2: "00100 Helsinki",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Esimerkkikatu+1%2C+00100+Helsinki%2C+Suomi",
} as const;

export const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Esimerkkikatu+1,+00100+Helsinki,+Suomi&output=embed&z=15";

export const OPENING_HOURS = [
  { day: "Ma-Pe", hours: "10–19" },
  { day: "La-Su", hours: "10–21" },
] as const;

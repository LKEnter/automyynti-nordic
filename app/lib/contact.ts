/** Shared contact details */
export const CONTACT = {
  phoneLabel: "044 522 2836",
  phoneHref: "tel:+358445222836",
  emailLabel: "t1automyynti@gmail.com",
  emailHref: "mailto:t1automyynti@gmail.com",
  addressLine1: "Ihoden Kylätie 90",
  addressLine2: "27320 Ihode",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Ihoden+Kyl%C3%A4tie+90%2C+27320+Ihode%2C+Suomi",
} as const;

export const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Ihoden+Kylätie+90,+27320+Ihode,+Suomi&output=embed&z=15";

export const OPENING_HOURS = [
  { day: "Ma-Pe", hours: "10–19" },
  { day: "La-Su", hours: "10–21" },
] as const;

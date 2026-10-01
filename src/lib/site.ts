// Single source of truth for business details (NAP + hours).
// Keep this in sync with the Google Business Profile.

export const SITE = {
  name: "Belvie Spa and Massage Center",
  shortName: "Belvie Spa",
  url: "https://www.islamabadmassagecenter.com",
  phone: "+923183526306",
  phoneDisplay: "0318 3526306",
  phoneIntl: "+92 318 3526306",
  whatsapp: "923183526306",
  email: "info@belviespa.com",
  address: {
    street: "Maqbool Market, F-7/4",
    sector: "F-7/4",
    city: "Islamabad",
    region: "Islamabad Capital Territory",
    postalCode: "44000",
    country: "PK",
    full: "Maqbool Market, F-7/4, Islamabad 44000, Pakistan",
    short: "Maqbool Market, F-7/4, Islamabad",
  },
  mapUrl: "https://share.google/WgrBX63tHp54fzlxB",
  mapEmbed:
    "https://www.google.com/maps?q=Belvie+Spa+Maqbool+Market+F-7%2F4+Islamabad&z=16&output=embed",
  hours: {
    opens: "11:00",
    closes: "23:59",
    short: "Daily 11 AM – 12 AM",
    long: "Open 7 days a week, 11:00 AM – 12:00 AM (midnight)",
  },
  nearby: ["F-6", "F-8", "E-7", "G-7", "G-6", "F-10", "Blue Area", "Jinnah Super Market"],
} as const;

export const whatsappLink = (text = "Hi! I would like to book an appointment at Belvie Spa, F-7/4 Islamabad.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const providerSchema = {
  "@type": "DaySpa",
  "@id": `${SITE.url}/#spa`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
};

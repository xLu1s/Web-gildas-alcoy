/**
 * DATOS DEL NEGOCIO. Solo datos con fuente pública (brief de investigación, 22/10/2026).
 * [IG] instagram.com/gildas.alcoy · [FB] facebook.com/gildas.alcoy · [GM] ficha de Google Maps
 */
export const site = {
  name: 'Gildas | Alcoy',
  shortName: 'Gildas',
  // Bio literal de IG y FB
  tagline: 'Esto va de producto de aquí. De muchas gildas, platos y buen beber.',
  // Claim de la carta [CARTA-C]
  claim: 'verde, salada y un poco picante',
  // Teléfono [FB]. Google Maps no tiene teléfono. El mismo número tiene WhatsApp (confirmado por Luis).
  phoneDisplay: '722 16 07 43',
  phoneE164: '+34722160743',
  whatsapp: 'https://wa.me/34722160743',
  // Email [FB]. Solo como contacto general (no es canal de reservas confirmado).
  email: 'gildas.alcoy00@gmail.com',
  address: {
    street: 'Carrer Sant Maure, 32',
    postalCode: '03801',
    locality: 'Alcoi',
    localityEs: 'Alcoy',
    region: 'Alicante',
  },
  // [GM]
  geo: { lat: 38.697025, lng: -0.4747667 },
  mapsLink:
    'https://www.google.com/maps/place/Gildas+%7C+Alcoy/@38.697025,-0.4747667,17z/data=!4m6!3m5!1s0xd61870a4d72d34d:0xcb00d306200f9426!8m2!3d38.697025!4d-0.4747667!16s%2Fg%2F11nw7wqbjs',
  mapsEmbed: 'https://www.google.com/maps?q=38.697025,-0.4747667&z=17&output=embed',
  instagram: 'https://www.instagram.com/gildas.alcoy/',
  instagramHandle: '@gildas.alcoy',
  facebook: 'https://www.facebook.com/gildas.alcoy/',
  // Inauguración: jueves 24/09/2026 [IG]
  opened: '2026-09-24',
};

/**
 * HORARIO. El de la bio de Instagram (horario definitivo).
 * day: 0 = domingo … 6 = sábado (para resaltar el día actual).
 */
export const hours: { day: number; label: string; slots: string[] }[] = [
  { day: 1, label: 'Lunes', slots: [] },
  { day: 2, label: 'Martes', slots: [] },
  { day: 3, label: 'Miércoles', slots: ['19:30 – 00:00'] },
  { day: 4, label: 'Jueves', slots: ['19:30 – 00:00'] },
  { day: 5, label: 'Viernes', slots: ['12:30 – 17:00', '19:30 – 01:00'] },
  { day: 6, label: 'Sábado', slots: ['12:30 – 17:00', '19:30 – 01:00'] },
  { day: 0, label: 'Domingo', slots: [] },
];
export const hoursShort = [
  { days: 'Mié y Jue', time: '19:30 – 00:00' },
  { days: 'Vie y Sáb', time: '12:30 – 17:00 · 19:30 – 01:00' },
];

/** JSON-LD openingHoursSpecification (mismo horario que arriba). */
export const openingHoursLd = [
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday', 'Thursday'], opens: '19:30', closes: '00:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday'], opens: '12:30', closes: '17:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday'], opens: '19:30', closes: '01:00' },
];

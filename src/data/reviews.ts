/**
 * RESEÑAS. Solo reseñas literales de Google Maps, en español, con 5★ (brief 22/10/2026; las de Pablo Ramón
 * Juan García, Marc Grau y Carlos Calbo Prats, confirmadas como 5★ por Luis). Autor tal como aparece en Google.
 * El texto es literal: no editar ni completar (el "[…]" es un corte del original del brief).
 */
export const reviews: { text: string; author: string; badge?: string; rating: number; source: string }[] = [
  {
    text: 'Nuevo sitio en Alcoy. Gran variedad de gildas. Y el vermú muy rico',
    author: 'Marcos Pons',
    badge: 'Local Guide',
    rating: 5,
    source: 'Google',
  },
  {
    text: 'El mejor de Alcoy (y contorná). Las Gildas, las marineras y todo en general increíble. Pa no salir de allí.',
    author: 'Pablo Ramón Juan García',
    rating: 5,
    source: 'Google',
  },
  {
    text: 'Todo buenísimo y un ambiente genial. El local se ha quedado muy chulo y el producto de 10. Volveremos seguro.',
    author: 'Marc Grau',
    rating: 5,
    source: 'Google',
  },
  {
    text: '¡Una experiencia de 10! Los platos estaban deliciosos, con una presentación impecable y productos de gran calidad. […] Se nota el cariño y la dedicación que ponen en cada detalle.',
    author: 'Carlos Calbo Prats',
    rating: 5,
    source: 'Google',
  },
];

/**
 * GALERÍA. Fotos públicas de Instagram (@gildas.alcoy, miniaturas de 360–480 px) y de la ficha de Google Maps.
 * Origen de cada una en /workspace/gildas/images/FUENTES.md. Pedir al cliente los originales en alta.
 */
export const galleryMeta: Record<string, { alt: string; caption: string; source: string; size?: 'tall' | 'wide' }> = {
  'fachada.jpg': { alt: 'Fachada de Gildas en el Carrer Sant Maure de Alcoy, con el rótulo verde y la reja negra', caption: 'Carrer Sant Maure, 32', source: 'Instagram', size: 'tall' },
  'interior-mesas.jpg': { alt: 'Sala con mesas de mármol claro, sillas verdes y botelleros iluminados bajo el lucernario', caption: 'La sala', source: 'Google Maps', size: 'tall' },
  'pared-logo.jpg': { alt: 'Pared de azulejo blanco con el logo de Gildas retroiluminado sobre la barra', caption: 'La pared del logo', source: 'Instagram', size: 'tall' },
  'gildas-y-canas.jpg': { alt: 'Platos de gildas y cecina con dos cañas de cerveza en una mesa', caption: 'Gildas y cañas', source: 'Google Maps', size: 'tall' },
  'vino.jpg': { alt: 'Copa de vino tinto sirviéndose desde la botella', caption: 'Vinos por copa', source: 'Instagram', size: 'tall' },
};

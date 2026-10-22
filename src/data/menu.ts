/**
 * CARTA. Transcripción literal de los PDF de octubre de 2026 (copias en docs/):
 *  - carta-comida.pdf (imagen, sin texto: transcrita a mano, alérgenos leídos de los iconos)
 *  - carta-comida-terraza.pdf (igual que la de comida, pero SIN la sección «Platitos»)
 *  - carta-bebida.pdf
 * Precios en euros, IVA incluido según la carta. Si cambia la carta, editar solo este archivo.
 */
export type Allergen =
  | 'gluten' | 'crustaceos' | 'huevos' | 'pescado' | 'cacahuetes' | 'soja' | 'lacteos'
  | 'frutos' | 'apio' | 'mostaza' | 'sesamo' | 'sulfitos' | 'moluscos' | 'altramuces';

export const allergens: Record<Allergen, { name: string; code: string }> = {
  gluten: { name: 'Cereales con gluten', code: 'GL' },
  crustaceos: { name: 'Crustáceos', code: 'CR' },
  huevos: { name: 'Huevos', code: 'HU' },
  pescado: { name: 'Pescado', code: 'PE' },
  cacahuetes: { name: 'Cacahuetes', code: 'CA' },
  soja: { name: 'Soja', code: 'SO' },
  lacteos: { name: 'Lácteos', code: 'LA' },
  frutos: { name: 'Frutos de cáscara', code: 'FC' },
  apio: { name: 'Apio', code: 'AP' },
  mostaza: { name: 'Mostaza', code: 'MO' },
  sesamo: { name: 'Granos de sésamo', code: 'SE' },
  sulfitos: { name: 'Dióxido de azufre y sulfitos', code: 'SU' },
  moluscos: { name: 'Moluscos', code: 'ML' },
  altramuces: { name: 'Altramuces', code: 'AL' },
};

export const allergenNote =
  'Cualquier intolerancia o alergia, avisad expresamente al staff. Si lo deseas, preguntad por opciones sin gluten.';

export interface Dish { name: string; price: string; desc?: string; allergens?: Allergen[]; star?: boolean }
export interface MenuSection { id: string; title: string; note?: string; notInTerrace?: boolean; items: Dish[] }

export const food: MenuSection[] = [
  {
    id: 'gildas',
    title: 'Gildas',
    items: [
      { name: 'Gilda clásica anchoa', price: '2', desc: 'Aceituna, piparra y anchoa en aceite.', allergens: ['pescado'], star: true },
      { name: 'Gilda boquerón', price: '2', desc: 'Aceituna, piparra y boquerón en vinagre.', allergens: ['pescado', 'sulfitos'] },
      { name: 'Gilda bonito', price: '2,5', desc: 'Gilda de bonito, sabrosa y equilibrada.', allergens: ['pescado'] },
      { name: 'Gilda matrimoni', price: '2,5', desc: 'Gilda de anchoa y boquerón, nuestro clásico matrimonio.', allergens: ['pescado'] },
      { name: 'Gilda pulpo', price: '2,5', desc: 'Gilda de pulpo, intensa y marinera.', allergens: ['moluscos'] },
      { name: 'Gilda vegana', price: '2,5', desc: 'Alcachofa, pimiento, tomate seco, pepinillo, piparra y aceitunas.' },
      { name: 'Gilda cecina', price: '3', desc: 'Cecina y queso en un bocado.', allergens: ['lacteos'] },
    ],
  },
  {
    id: 'tapas-frias',
    title: 'Tapas frías',
    items: [
      { name: 'Marinera', price: '4', desc: 'Ensaladilla rusa sobre rosquilla crujiente, coronada con anchoa.', allergens: ['pescado', 'huevos', 'gluten'] },
      { name: 'Marinero', price: '4', desc: 'Ensaladilla rusa sobre rosquilla crujiente, coronada con boquerón.', allergens: ['pescado', 'huevos', 'sulfitos', 'gluten'] },
      { name: 'Matrimonio', price: '4,5', desc: 'Ensaladilla marinera con anchoa y boquerón: el matrimonio perfecto.', allergens: ['pescado', 'huevos', 'sulfitos', 'gluten'] },
      { name: 'Ensaladilla rusa', price: '8', desc: 'Ensaladilla rusa de la casa, acompañada de regañás.', allergens: ['gluten', 'huevos'] },
      { name: 'Tomate con anchoas', price: '12', desc: 'Tomate de temporada, anchoas, regañás crujientes y aceite de oliva.', allergens: ['pescado', 'gluten'] },
      { name: 'Tomate con salazones', price: '10', desc: 'Tomate de temporada con mojama, bonito curado, almendras y aceite de oliva.', allergens: ['pescado', 'frutos'] },
      { name: 'Escalivada', price: '12', desc: 'Escalivada con aceitunas y piparras, acompañada de pan cristalino.', allergens: ['gluten'] },
      { name: 'Pericana', price: '12', desc: 'Pericana marinada con buen aceite de oliva y pan cristalino.', allergens: ['pescado', 'gluten'] },
    ],
  },
  {
    id: 'de-corte',
    title: 'De corte',
    items: [
      { name: 'Tabla de quesos', price: '10', desc: 'Selección de quesos con almendras y regañás.', allergens: ['lacteos', 'frutos', 'gluten'] },
      { name: 'Tabla de embutidos', price: '11', desc: 'Selección de embutidos acompañada de regañás.', allergens: ['gluten'] },
      { name: 'Virutitas de jamón ibérico', price: '8', desc: 'Virutas de jamón ibérico acompañadas de regañás.', allergens: ['gluten'] },
    ],
  },
  {
    id: 'conservas',
    title: 'Conservas',
    items: [
      { name: 'Mejillones', price: '12', desc: 'Mejillones en conserva con emulsión de su jugo y papas.', allergens: ['huevos'] },
      { name: 'Navajas', price: '12', desc: 'Navajas en conserva con emulsión de su jugo y papas.', allergens: ['moluscos', 'huevos'] },
      { name: 'Almejas', price: '12', desc: 'Almejas en conserva con emulsión de su jugo y papas.', allergens: ['moluscos', 'huevos'] },
      { name: 'Ostras', price: '18', desc: 'Ostras en conserva con emulsión de su jugo y papas.', allergens: ['moluscos', 'huevos'] },
      { name: 'Foie del mar', price: '10', desc: 'Hígado de bacalao con tostas crujientes y sal negra.', allergens: ['pescado', 'gluten'] },
    ],
  },
  {
    id: 'platitos',
    title: 'Platitos',
    notInTerrace: true,
    items: [
      { name: 'Alcachofa a baja temperatura', price: '5', desc: 'Alcachofa cocinada a baja temperatura, terminada con aceite de oliva y sal.' },
      { name: 'Tortilla de patatas', price: '8', desc: 'Tortilla de patatas acompañada de pan tostado.', allergens: ['huevos', 'gluten'] },
      { name: 'Tuétano steak tartar', price: '21', desc: 'Tuétano con steak tartar, pensado para compartir.', star: true },
      { name: 'Secreto a baja temperatura', price: '9,5', desc: 'Secreto cocinado a baja temperatura con salsa Pedro Ximénez.' },
    ],
  },
  {
    id: 'tostas',
    title: 'Tostas',
    items: [
      { name: 'Tosta de tomate con anchoas', price: '5', desc: 'Pan cristalino con tomate rallado, anchoas y aceite de oliva.', allergens: ['pescado', 'gluten'] },
      { name: 'Tosta de tomate y bonito', price: '5', desc: 'Pan cristalino con tomate rallado y bonito curado.', allergens: ['pescado', 'gluten'] },
      { name: 'Bocado de escalivada', price: '5', desc: 'Coca de Aurora con escalivada y anchoa.', allergens: ['pescado', 'gluten'] },
      { name: 'Bocado de anchoa', price: '5', desc: 'Coca de Aurora con anchoa, mantequilla y un suave toque dulce.', allergens: ['pescado', 'lacteos', 'gluten'] },
      { name: 'Tosta de lacón y mayonesa trufada', price: '3,5', desc: 'Pan cristalino con lacón y mayonesa trufada.', allergens: ['huevos', 'gluten'] },
      { name: 'Tosta de sobrasada y queso', price: '3,5', desc: 'Pan cristalino con sobrasada, queso y aceite de oliva.', allergens: ['lacteos', 'gluten'] },
      { name: 'Tosta de jamón ibérico', price: '5', desc: 'Pan cristalino con tomate rallado, aceite de oliva y virutas de jamón ibérico.', allergens: ['gluten'] },
    ],
  },
  {
    id: 'montaditos',
    title: 'Montaditos',
    items: [
      { name: 'Pepito de ternera', price: '5', desc: 'Ternera con mantequilla y sal en panecillo cristalino.', allergens: ['lacteos', 'gluten'] },
      { name: 'Bikini trufado', price: '5', desc: 'Lacón y queso trufado en mollete tostado con mantequilla.', allergens: ['lacteos', 'gluten'], star: true },
      { name: 'Hamburguesita', price: '5', desc: 'Mini burger de ternera y queso en pan brioche.', allergens: ['lacteos', 'gluten'] },
    ],
  },
  {
    id: 'postres',
    title: 'Postres',
    items: [
      { name: 'Choco sal', price: '4', desc: 'Chocolate 70 %, coca de Aurora, aceite de oliva y un toque de sal.', allergens: ['lacteos', 'gluten'] },
      { name: 'Tarta de queso y pistacho', price: '8', desc: 'Tarta de queso con pistacho.', allergens: ['lacteos', 'frutos'] },
      { name: 'Trufas', price: '5', desc: 'Trufas de chocolate.', allergens: ['lacteos'] },
      { name: 'Tocino de cielo', price: '8', desc: 'Clásico tocino de cielo.', allergens: ['huevos'] },
    ],
  },
];

export const drinks: MenuSection[] = [
  {
    id: 'vermut-copa',
    title: 'Vermut y vinos por copa',
    items: [
      { name: 'Vermut Bendito', price: '3,00', star: true },
      { name: 'Campillo Niño', price: '3,00' },
      { name: 'Esencia del Mediterráneo', price: '3,00' },
      { name: 'Portia Roble', price: '3,50' },
      { name: 'Javier Sanz Verdejo', price: '3,50' },
      { name: 'Distinto de Verano', price: '3,80' },
    ],
  },
  {
    id: 'cervezas',
    title: 'Cervezas',
    items: [
      { name: 'Cañita Alhambra Especial', price: '2,20' },
      { name: 'Caña Alhambra Especial', price: '2,80' },
      { name: 'Mahou 5 Estrellas', price: '3,00' },
      { name: 'Mahou Radler', price: '3,00' },
      { name: 'Mahou 0,0 Tostada', price: '3,00' },
      { name: 'Alhambra Reserva 1925', price: '3,50' },
      { name: 'Mahou Sin Gluten', price: '3,60' },
    ],
  },
  {
    id: 'tintos',
    title: 'Vinos tintos',
    note: 'Botella',
    items: [
      { name: 'Campillo Niño', price: '12' },
      { name: 'Portia Roble', price: '15' },
      { name: 'Ultreia St. Jacques', price: '19' },
      { name: 'Luis Cañas', price: '19' },
      { name: 'Portia Gala', price: '35' },
    ],
  },
  {
    id: 'blancos',
    title: 'Vinos blancos',
    note: 'Botella',
    items: [
      { name: 'Campillo Albariño', price: '18' },
      { name: 'Javier Sanz Verdejo', price: '19' },
      { name: 'Fulcro Apedreira', price: '22' },
      { name: 'Conde de Pazo Godello', price: '22' },
    ],
  },
  {
    id: 'espumosos',
    title: 'Espumosos',
    note: 'Botella',
    items: [
      { name: 'Gramona', price: '35' },
      { name: 'Gramona Rosé', price: '35' },
      { name: 'Moët & Chandon', price: '50' },
      { name: 'Veuve Clicquot', price: '70' },
    ],
  },
  {
    id: 'de-alcoy',
    title: 'Plis-Play y Litro y Litro',
    items: [
      { name: 'Plis-Play', price: '4,50' },
      { name: 'Litro y Litro', price: '20,00' },
    ],
  },
  {
    id: 'refrescos',
    title: 'Refrescos y aguas',
    items: [
      { name: 'Coca-Cola', price: '2,50' },
      { name: 'Coca-Cola Zero', price: '2,50' },
      { name: 'Aquarius', price: '2,50' },
      { name: 'Fuze Tea', price: '2,50' },
      { name: 'Sprite', price: '2,50' },
      { name: 'Bitter Kas', price: '2,50' },
      { name: 'Fanta Limón', price: '2,00' },
      { name: 'Fanta Naranja', price: '2,00' },
      { name: 'Solán de Cabras', price: '2,00' },
      { name: 'Solán de Cabras con gas', price: '2,20' },
    ],
  },
  {
    id: 'cafes',
    title: 'Cafés',
    items: [
      { name: 'Solo', price: '1,50' },
      { name: 'Cortado', price: '1,80' },
      { name: 'Café con leche', price: '1,80' },
      { name: 'Carajillo', price: '2,80' },
    ],
  },
  {
    id: 'chupitos',
    title: 'Chupitos',
    items: [
      { name: 'Mistela', price: '1,50' },
      { name: 'Arroz', price: '1,50' },
      { name: 'Fresa Que Chido', price: '1,50' },
      { name: 'Biri Biri', price: '1,50' },
      { name: 'Brandy Prestigio', price: '5,00' },
      { name: 'Tequila Patrón Silver', price: '8,00' },
    ],
  },
  {
    id: 'copas',
    title: 'Copas',
    items: [
      { name: 'Gin Tonic Bombay Sapphire', price: '7,00' },
      { name: 'Whisky Cola Dewars', price: '7,00' },
      { name: 'Ron Cola Santa Teresa', price: '8,00' },
      { name: 'Vodka Tonic Grey Goose', price: '9,00' },
    ],
  },
];

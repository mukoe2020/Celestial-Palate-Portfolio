export type Location = 'south-africa' | 'japan' | 'italy';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  price: string;
  category: 'starter' | 'main' | 'dessert';
}

export interface LocationInfo {
  id: Location;
  name: string;
  country: string;
  tagline: string;
  description: string;
  cuisineTypes: string[];
}

export const locations: LocationInfo[] = [
  {
    id: 'south-africa',
    name: 'Cape Town',
    country: 'South Africa',
    tagline: 'Where African Soul Meets Ocean Breeze',
    description: 'Nestled along the Atlantic Seaboard, our Cape Town venue offers panoramic views of Table Mountain while celebrating the rich tapestry of African and Cape Malay flavours.',
    cuisineTypes: ['African Fusion', 'Cape Malay', 'Contemporary'],
  },
  {
    id: 'japan',
    name: 'Tokyo',
    country: 'Japan',
    tagline: 'Tradition Refined, Excellence Defined',
    description: 'In the heart of Ginza, our Tokyo establishment honours centuries of Japanese culinary mastery, presenting kaiseki traditions with modern artistry.',
    cuisineTypes: ['Kaiseki', 'Omakase', 'Contemporary Japanese'],
  },
  {
    id: 'italy',
    name: 'Florence',
    country: 'Italy',
    tagline: 'Renaissance of Flavour',
    description: 'Housed in a restored 15th-century palazzo, our Florence location celebrates Tuscan heritage with ingredients from our own estates in the rolling hills of Chianti.',
    cuisineTypes: ['Tuscan', 'Italian Contemporary', 'Mediterranean'],
  },
];

export const menus: Record<Location, MenuItem[]> = {
  'south-africa': [
    {
      id: 'sa-1',
      name: 'Bobotie Royale',
      description: 'Cape Malay spiced lamb with apricot chutney, saffron rice, and micro herbs',
      cuisine: 'Cape Malay',
      price: 'R485',
      category: 'main',
    },
    {
      id: 'sa-2',
      name: 'Kingklip Tempura',
      description: 'Atlantic kingklip in light tempura, chakalaka aioli, pickled vegetables',
      cuisine: 'African Fusion',
      price: 'R395',
      category: 'starter',
    },
    {
      id: 'sa-3',
      name: 'Karoo Lamb Rack',
      description: 'Free-range Karoo lamb, rosemary jus, roasted root vegetables, mint oil',
      cuisine: 'Contemporary',
      price: 'R595',
      category: 'main',
    },
    {
      id: 'sa-4',
      name: 'Biltong Carpaccio',
      description: 'Wagyu biltong, truffle oil, wild rocket, aged parmesan shavings',
      cuisine: 'African Fusion',
      price: 'R285',
      category: 'starter',
    },
    {
      id: 'sa-5',
      name: 'Malva Pudding Deconstructed',
      description: 'Warm malva sponge, amarula ice cream, apricot gel, candied walnuts',
      cuisine: 'Cape Malay',
      price: 'R195',
      category: 'dessert',
    },
    {
      id: 'sa-6',
      name: 'Rooibos Crème Brûlée',
      description: 'Rooibos-infused custard, caramelized sugar, honeybush shortbread',
      cuisine: 'Contemporary',
      price: 'R175',
      category: 'dessert',
    },
  ],
  'japan': [
    {
      id: 'jp-1',
      name: 'Wagyu Tataki',
      description: 'A5 Miyazaki wagyu, ponzu gel, wasabi flowers, shiso leaves',
      cuisine: 'Contemporary Japanese',
      price: '¥8,500',
      category: 'starter',
    },
    {
      id: 'jp-2',
      name: 'Sakura Masu',
      description: 'Cherry trout sashimi, sakura salt, yuzu kosho, edible flowers',
      cuisine: 'Kaiseki',
      price: '¥5,200',
      category: 'starter',
    },
    {
      id: 'jp-3',
      name: 'Omakase Sushi Selection',
      description: 'Chef\'s choice of 12 pieces, seasonal fish, aged soy, fresh wasabi',
      cuisine: 'Omakase',
      price: '¥18,000',
      category: 'main',
    },
    {
      id: 'jp-4',
      name: 'Kurobuta Kakuni',
      description: 'Braised black pork belly, dashi reduction, pickled ginger, rice paper',
      cuisine: 'Kaiseki',
      price: '¥7,800',
      category: 'main',
    },
    {
      id: 'jp-5',
      name: 'Matcha Mille-Feuille',
      description: 'Layers of matcha cream, azuki bean, gold leaf, black sesame tuile',
      cuisine: 'Contemporary Japanese',
      price: '¥3,200',
      category: 'dessert',
    },
    {
      id: 'jp-6',
      name: 'Yuzu Sorbet Garden',
      description: 'Yuzu sorbet, white peach, jasmine foam, mochi pearls',
      cuisine: 'Kaiseki',
      price: '¥2,800',
      category: 'dessert',
    },
  ],
  'italy': [
    {
      id: 'it-1',
      name: 'Burrata di Puglia',
      description: 'Creamy burrata, heirloom tomatoes, aged balsamic, basil oil',
      cuisine: 'Italian Contemporary',
      price: '€32',
      category: 'starter',
    },
    {
      id: 'it-2',
      name: 'Pici al Tartufo',
      description: 'Hand-rolled pici pasta, black truffle, pecorino foam, truffle oil',
      cuisine: 'Tuscan',
      price: '€48',
      category: 'starter',
    },
    {
      id: 'it-3',
      name: 'Bistecca alla Fiorentina',
      description: 'Chianina beef T-bone, rosemary salt, charred lemon, olive oil',
      cuisine: 'Tuscan',
      price: '€95',
      category: 'main',
    },
    {
      id: 'jp-4',
      name: 'Branzino al Sale',
      description: 'Salt-crusted sea bass, fennel purée, citrus, Ligurian olives',
      cuisine: 'Mediterranean',
      price: '€68',
      category: 'main',
    },
    {
      id: 'it-5',
      name: 'Tiramisù Elegante',
      description: 'Mascarpone cream, espresso-soaked savoiardi, cocoa dust, amaretto',
      cuisine: 'Italian Contemporary',
      price: '€22',
      category: 'dessert',
    },
    {
      id: 'it-6',
      name: 'Panna Cotta ai Fichi',
      description: 'Vanilla panna cotta, fig compote, honey, toasted almonds',
      cuisine: 'Tuscan',
      price: '€18',
      category: 'dessert',
    },
  ],
};

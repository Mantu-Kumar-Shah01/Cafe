export interface MenuItem {
  id: string;
  name: string;
  category: 'espresso' | 'elixir' | 'patisserie' | 'brunch';
  price: string;
  description: string;
  notes?: string[];
  origin?: string;
  elevation?: string;
  image: string;
  tag?: string;
  calories?: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  altitudeOrSpec: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  spanClass: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  location: string;
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Yirgacheffe Pour-Over',
    category: 'espresso',
    price: '€8.50',
    description: 'V60 single-origin hand pour with vibrant floral aroma and delicate bergamot finish.',
    notes: ['Bergamot', 'Jasmine Blossom', 'Meyer Lemon', 'Black Tea'],
    origin: 'Gedeo Zone, Ethiopia',
    elevation: '2,150m MASL',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop',
    tag: 'Signature Origin'
  },
  {
    id: 'm2',
    name: 'Espresso Tonic No. 4',
    category: 'elixir',
    price: '€9.00',
    description: 'Double shot Geisha extraction over botanical Mediterranean tonic, garnished with charred rosemary.',
    notes: ['Charred Rosemary', 'Pink Peppercorn', 'Sparkling Yuzu'],
    origin: 'Boquete, Panama',
    elevation: '1,780m MASL',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1000&auto=format&fit=crop',
    tag: 'House Special'
  },
  {
    id: 'm3',
    name: 'Wildflower Honey & Oat Latte',
    category: 'espresso',
    price: '€7.50',
    description: 'Raw mountain blossom honey infused with Madagascar vanilla bean and micro-foamed organic oat milk.',
    notes: ['Wild Honey', 'Madagascar Vanilla', 'Toasted Oat'],
    origin: 'Huila, Colombia',
    elevation: '1,850m MASL',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'm4',
    name: 'Smoked Vanilla Nitro Cold Brew',
    category: 'elixir',
    price: '€8.00',
    description: '24-hour slow steeped anaerobic batch infused with nitrogen for a silky Guinness-like micro-head.',
    notes: ['Oak Smoke', 'Dark Cocoa 85%', 'Bourbon Vanilla'],
    origin: 'Tarrazú, Costa Rica',
    elevation: '1,900m MASL',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1000&auto=format&fit=crop',
    tag: '24h Steep'
  },
  {
    id: 'm5',
    name: 'Ceremonial Uji Matcha Latte',
    category: 'elixir',
    price: '€8.50',
    description: 'First harvest stone-ground green tea from Kyoto, hand-whisked with pistachio cream.',
    notes: ['Umami', 'Fresh Grass', 'Pistachio Velvet'],
    origin: 'Uji, Kyoto, Japan',
    elevation: 'Hand-Harvested',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=1000&auto=format&fit=crop',
    tag: 'Direct Kyoto Import'
  },
  {
    id: 'm6',
    name: 'Bronte Pistachio Supreme Croissant',
    category: 'patisserie',
    price: '€7.80',
    description: '72-hour cultured butter lamination filled with Sicilian Bronte pistachio praline and crushed nuts.',
    notes: ['Bronte Pistachio', 'Normandy Butter 84%', 'Fleur de Sel'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop',
    tag: 'Chef Choice'
  },
  {
    id: 'm7',
    name: 'Valrhona Dark Ganache Pain au Chocolat',
    category: 'patisserie',
    price: '€6.50',
    description: 'Twice-baked viennoiserie stuffed with dual batons of Guanaja 70% dark chocolate and almond flake.',
    notes: ['Guanaja 70%', 'Toasted Almond', 'Golden Caramel'],
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'm8',
    name: 'Whipped Ricotta & Fig Brioche',
    category: 'brunch',
    price: '€14.50',
    description: 'Toasted sourdough brioche topped with lemon zest ricotta, mission figs, thyme honey, and walnuts.',
    notes: ['Mission Fig', 'Thyme Honey', 'Whipped Ricotta'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1000&auto=format&fit=crop',
    tag: 'All-Day Brunch'
  },
  {
    id: 'm9',
    name: 'Avocado Tartine with Cured Yolk',
    category: 'brunch',
    price: '€15.00',
    description: 'Seeded rye loaf, citrus emulsion avocado mousse, shaved radishes, dukkah, and grated salt-cured yolk.',
    notes: ['Egyptian Dukkah', 'Fermented Chili Oil', 'Seeded Rye'],
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=1000&auto=format&fit=crop',
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'ORIGIN & TERROIR',
    subtitle: 'Ethical Direct-Trade Micro Lots',
    description: 'We partner directly with generational farmers across Ethiopia, Panama, and Colombia who cultivate rare varietals at extreme high altitudes with biodynamic regenerative methods.',
    details: ['1,800m – 2,200m Altitude', 'Single-Lot Traceability', 'Fair Share +40% Over Market Price'],
    altitudeOrSpec: 'Volcanic Soil • Shade Grown',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1000&auto=format&fit=crop'
  },
  {
    step: '02',
    title: 'PRECISION ROAST',
    subtitle: 'Nordic Light Profiling in Small Batches',
    description: 'Roasted in-house on our custom cast-iron Loring S15 Kestrel roaster. We calibrate each curve to accentuate innate sweetness, vibrant acidity, and origin terroir without bitter char.',
    details: ['Small 8kg Batches', 'Real-Time Airflow Modulation', 'Degassing Chamber Aged 14 Days'],
    altitudeOrSpec: 'Light Nordic Profile • 196°C Max',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=1000&auto=format&fit=crop'
  },
  {
    step: '03',
    title: 'RITUAL EXTRACTION',
    subtitle: 'Mineral Chemistry & Custom Extraction Flow',
    description: 'Every drop is dialed daily with custom mineral-reconstituted water (93.5°C, 130ppm) through our bespoke Slayer Steam espresso machine and handcrafted ceramic drippers.',
    details: ['Custom TDS Water Alchemy', '9 Bar Pre-Infusion Profiling', 'Dialed Hourly to Barometric Pressure'],
    altitudeOrSpec: '93.5°C • 1:2.1 Brew Ratio',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop'
  },
  {
    step: '04',
    title: 'THE SENSORY MOMENT',
    subtitle: 'Served in Hand-Thrown Local Ceramics',
    description: 'Coffee designed to be savored slowly. Accompanied by curated tasting cards, ambient soundscapes, and an atmosphere designed to let the outside world fade away.',
    details: ['Bespoke Stoneware Vessels', 'Sensory Tasting Aroma Cards', 'Mindful Acoustic Environment'],
    altitudeOrSpec: 'Artisanal Experience',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Architectural Sunken Seating',
    category: 'Interior & Space',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop',
    aspect: 'tall',
    spanClass: 'col-span-1 md:col-span-1 md:row-span-2'
  },
  {
    id: 'g2',
    title: 'Morning Pourover Ritual',
    category: 'Specialty Brew',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop',
    aspect: 'wide',
    spanClass: 'col-span-1 md:col-span-2'
  },
  {
    id: 'g3',
    title: 'Fresh Laminated Croissants',
    category: 'Artisan Bakery',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop',
    aspect: 'square',
    spanClass: 'col-span-1 md:col-span-1'
  },
  {
    id: 'g4',
    title: 'The Master Barista Craft',
    category: 'People & Passion',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop',
    aspect: 'square',
    spanClass: 'col-span-1 md:col-span-1'
  },
  {
    id: 'g5',
    title: 'Courtyard Twilight Atmosphere',
    category: 'Evening Moments',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    aspect: 'wide',
    spanClass: 'col-span-1 md:col-span-2'
  },
  {
    id: 'g6',
    title: 'Cold Brew Extraction Tower',
    category: 'Alchemy',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1000&auto=format&fit=crop',
    aspect: 'tall',
    spanClass: 'col-span-1 md:col-span-1 md:row-span-2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "The kind of place where one espresso transforms into three hours of profound inspiration. The architectural silence is pure luxury.",
    author: "Elena Rostova",
    role: "Architect & Contributing Editor, Design Bureau",
    rating: 5,
    location: "Milan / Vienna",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 't2',
    quote: "Their Geisha pour-over altered my entire perception of coffee acidity. It drinks like an exquisite vintage champagne with delicate notes of jasmine.",
    author: "Marcello Vance",
    role: "Sommelier & Culinary Author",
    rating: 5,
    location: "Paris",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 't3',
    quote: "No rushing, no noise. Just warm travertine stone, natural light, and the finest pistachio pastry north of Sicily.",
    author: "Sophia Lindqvist",
    role: "Creative Director",
    rating: 5,
    location: "Copenhagen",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop"
  }
];

export const EXPERIENCE_POINTS = [
  {
    number: '01',
    title: 'Micro-Roastery Laboratory',
    desc: 'Transparent roasting bar where guests can observe precision bean profiling and engage with our head roaster.'
  },
  {
    number: '02',
    title: 'Artisanal Viennoiserie',
    desc: 'Pastries rolled and baked continuously at 06:00, 11:00, and 15:00 using fermented AOP Normandy butter.'
  },
  {
    number: '03',
    title: 'Acoustic Sanctuary',
    desc: 'Sound-dampened acoustic clay walls, custom curated vinyl records, and bespoke ergonomic Japanese seating.'
  },
  {
    number: '04',
    title: 'Twilight Natural Wine & Botanicals',
    desc: 'From 17:00 onwards, the atelier transitions into low-intervention biodynamic wines and coffee cocktails.'
  }
];

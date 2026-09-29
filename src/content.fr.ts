// Tout le texte du site, en français.
// Pour modifier un texte : changez-le ici, puis relancez `npm run build`.
// Espace insécable (NBSP) : utilisée dans les prix et avant « ? », « : » et « % ».
// TODO(owner): relire les textes ajoutés hors brief : titres de section (title/eyebrow),
// meta.description, closing.text et les phrases sous les étapes du processus.

const NBSP = String.fromCharCode(160); // espace insécable

/** "12 900" → "12 900 MAD TTC" avec espaces insécables. */
export type ProblemIcon = 'search' | 'grid' | 'ruler';
export type ExampleImage = 'vitrine' | 'portfolio' | 'cabinet';

export const mad = (amount: string, suffix = 'TTC') =>
  `${amount.replace(/ /g, NBSP)}${NBSP}MAD${suffix ? NBSP + suffix : ''}`;

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const contact = {
  whatsappUrl:
    'https://wa.me/212644925581?text=Bonjour%20BPTechLabs%2C%20je%20souhaite%20un%20site%20pour%20mon%20cabinet%20d%27architecture.',
  whatsappLabel: 'Écrire sur WhatsApp',
  phoneDisplay: `+212${NBSP}6${NBSP}44${NBSP}92${NBSP}55${NBSP}81`,
  phoneE164: '+212644925581',
  domain: 'bptechlabs.com',
  siteUrl: 'https://bptechlabs.com/',
};

// ---------------------------------------------------------------------------
// Métadonnées (Google, partage WhatsApp / réseaux sociaux)
// ---------------------------------------------------------------------------

export const meta = {
  title: 'BPTechLabs · Sites web pour cabinets d’architecture au Maroc',
  description:
    'Sites web sur mesure pour cabinets d’architecture au Maroc : présentez vos projets et soyez trouvé sur Google. À partir de 7 500 MAD TTC.',
  ogImage: '/og-image.png', // TODO(owner): remplacer par une vraie image 1200x630.
  ogImageAlt: 'BPTechLabs, sites web pour cabinets d’architecture',
  brand: 'BPTechLabs',
};

// ---------------------------------------------------------------------------
// En-tête
// ---------------------------------------------------------------------------

export const nav = {
  links: [
    { href: '#exemples', label: 'Exemples' },
    { href: '#offres', label: 'Offres' },
    { href: '#processus', label: 'Processus' },
    { href: '#faq', label: 'FAQ' },
  ],
  menuLabel: 'Menu',
  skipLink: 'Aller au contenu',
};

// ---------------------------------------------------------------------------
// 1. Accroche
// ---------------------------------------------------------------------------

export const hero = {
  title: `Votre cabinet mérite mieux qu’une page${NBSP}Instagram`,
  subtitle:
    'Sites web sur mesure pour cabinets d’architecture, pour présenter vos projets et être trouvé sur Google.',
  note: `À partir de ${mad('7 500')} · Livraison en 2${NBSP}à${NBSP}6${NBSP}semaines`,
  // Site d'exemple dessiné dans la maquette (nom inventé).
  mockup: {
    url: 'atelier-trame.ma',
    name: 'Atelier Trame',
    links: ['Projets', 'Cabinet', 'Contact'],
    heading: 'Architecture & intérieur',
    projects: ['Villa, Rabat', 'Bureaux, Casablanca', 'Riad, Marrakech'],
    label: 'Aperçu d’un site d’architecte (exemple)',
  },
};

// ---------------------------------------------------------------------------
// 2. Problème et solution
// ---------------------------------------------------------------------------

export const problem: { eyebrow: string; title: string; points: { icon: ProblemIcon; text: string }[] } = {
  eyebrow: 'Pourquoi un site',
  title: 'Vos futurs clients vous cherchent en ligne.',
  points: [
    {
      icon: 'search',
      text: 'Un client qui cherche un architecte tape d’abord son nom sur Google.',
    },
    {
      icon: 'grid',
      text: 'Un site clair, avec vos projets, fait la différence face à une simple page Instagram.',
    },
    {
      icon: 'ruler',
      text: 'Chaque site est conçu sur mesure pour votre cabinet. C’est vous qui décidez de ce que vous voulez voir.',
    },
  ],
};

// ---------------------------------------------------------------------------
// 3. Exemples
// ---------------------------------------------------------------------------

export const examples: {
  eyebrow: string;
  title: string;
  tag: string;
  items: { plan: string; name: string; url: string; image: ExampleImage }[];
} = {
  eyebrow: 'Exemples',
  title: 'À quoi peut ressembler votre site.',
  tag: 'Exemple de démonstration',
  // Noms de cabinets inventés. Les images sont dans src/assets/examples/.
  // TODO(owner): remplacer les images par de vraies captures d'écran.
  items: [
    { plan: 'Vitrine', name: 'Atelier Trame', url: 'atelier-trame.ma', image: 'vitrine' },
    { plan: 'Portfolio', name: 'Studio Socle', url: 'studio-socle.ma', image: 'portfolio' },
    { plan: 'Cabinet', name: 'Axe & Plan Architectes', url: 'axe-et-plan.ma', image: 'cabinet' },
  ],
};

// ---------------------------------------------------------------------------
// 4. Avis clients
// ---------------------------------------------------------------------------

export type Review = { quote: string; name: string; firm: string };

export const reviewsSection = {
  eyebrow: 'Avis',
  title: 'Ce qu’en disent nos clients.',
};

// Laisser vide tant qu'il n'y a pas de vrais avis : la section ne s'affiche pas.
// TODO(owner): ajouter de vrais avis clients (avec leur accord). Ne jamais en inventer.
export const reviews: Review[] = [];

// ---------------------------------------------------------------------------
// 5. Offres
// ---------------------------------------------------------------------------

export type Plan = {
  id: string;
  name: string;
  price: string;
  quote: string;
  features: string[];
  delivery: string;
  recommended?: boolean;
};

export const offers = {
  eyebrow: 'Offres',
  title: 'Trois formules, selon vos besoins.',
  priceUnit: `MAD${NBSP}TTC`,
  deliveryLabel: `Livraison${NBSP}:`,
  recommendedLabel: 'Recommandé',
  // Ordre d'affichage sur mobile : Portfolio en premier.
  plans: [
    {
      id: 'portfolio',
      name: 'Portfolio',
      price: '12 900',
      quote: 'Vous ajoutez vos projets sans nous rappeler.',
      features: [
        'Tout Vitrine',
        'Vous gérez vos projets vous-même',
        'Galerie classée (résidentiel, bureaux, intérieur)',
        '10 à 15 projets',
        'Formation + 1 mois d’accompagnement',
      ],
      delivery: '3 à 4 semaines',
      recommended: true,
    },
    {
      id: 'vitrine',
      name: 'Vitrine',
      price: '7 500',
      quote: 'Un vrai site, pas une page Instagram.',
      features: [
        '5 à 7 pages',
        'Contact, WhatsApp, carte',
        'Compatible mobile',
        'Vous ne gérez pas les projets vous-même',
      ],
      delivery: '2 à 3 semaines',
    },
    {
      id: 'cabinet',
      name: 'Cabinet',
      price: '18 900',
      quote: 'Un outil de marque, pas une brochure.',
      features: [
        'Tout Portfolio',
        'En français et en anglais',
        'Rubrique actualités',
        'Formulaire de contact détaillé',
        '3 mois d’accompagnement',
      ],
      delivery: '5 à 6 semaines',
    },
  ] satisfies Plan[],
  // Tableau comparatif. Colonnes : Vitrine, Portfolio, Cabinet.
  // true = inclus, false = non inclus, texte = valeur affichée.
  compare: {
    caption: 'Comparer les formules',
    columns: ['Vitrine', 'Portfolio', 'Cabinet'],
    included: 'Inclus',
    notIncluded: 'Non inclus',
    rows: [
      { label: 'Prix', values: [mad('7 500'), mad('12 900'), mad('18 900')] },
      { label: 'Livraison', values: ['2 à 3 sem.', '3 à 4 sem.', '5 à 6 sem.'] },
      { label: '5 à 7 pages', values: [true, true, true] },
      { label: 'Contact, WhatsApp, carte', values: [true, true, true] },
      { label: 'Compatible mobile', values: [true, true, true] },
      { label: 'Vous gérez vos projets', values: [false, true, true] },
      { label: 'Galerie classée', values: [false, true, true] },
      { label: '10 à 15 projets', values: [false, true, true] },
      { label: 'Formation', values: [false, true, true] },
      { label: 'Accompagnement', values: [false, '1 mois', '3 mois'] },
      { label: 'Français et anglais', values: [false, false, true] },
      { label: 'Rubrique actualités', values: [false, false, true] },
      { label: 'Formulaire de contact détaillé', values: [false, false, true] },
    ] as { label: string; values: (string | boolean)[] }[],
  },
};

// ---------------------------------------------------------------------------
// 6. Processus
// ---------------------------------------------------------------------------

export const process = {
  eyebrow: 'Processus',
  title: 'Quatre étapes, de l’échange à la mise en ligne.',
  // TODO(owner): vérifier les phrases courtes sous chaque étape.
  steps: [
    { name: 'Échange', text: 'Vous nous présentez votre cabinet et vos projets.' },
    { name: 'Maquettes', text: 'Vous validez l’apparence du site avant sa création.' },
    { name: 'Création du site', text: 'Nous construisons le site avec vos projets.' },
    { name: 'Mise en ligne', text: 'Votre site est en ligne, vos clients peuvent le voir.' },
  ],
  paymentTitle: 'Paiement en trois fois',
  payments: [
    { share: 40, label: 'à la commande' },
    { share: 40, label: 'aux maquettes' },
    { share: 20, label: 'au lancement' },
  ],
};

// ---------------------------------------------------------------------------
// 7. Après la mise en ligne
// ---------------------------------------------------------------------------

export const maintenance = {
  eyebrow: 'Après la mise en ligne',
  title: 'On s’occupe du site. Vous vous occupez de vos projets.',
  priceUnit: `MAD${NBSP}TTC${NBSP}/ mois`,
  plans: [
    {
      price: '300',
      frequency: '1 modification tous les 3 mois',
      yearly: `Formule annuelle ${mad('3 000', '')} (2 mois offerts), payable en 2${NBSP}fois.`,
    },
    {
      price: '400',
      frequency: '1 modification chaque mois',
      yearly: `Formule annuelle ${mad('4 000', '')} (2 mois offerts), payable en 2${NBSP}fois.`,
    },
  ],
  included: ['Hébergement et entretien du site', 'Renouvellement du nom de domaine .ma'],
  note: 'Une modification, c’est ajouter, retirer ou modifier une page. Ce n’est pas la création d’un nouveau site.',
};

// ---------------------------------------------------------------------------
// 8. Messagerie professionnelle
// ---------------------------------------------------------------------------

export const email = {
  eyebrow: 'En option',
  title: 'Des adresses email à votre nom.',
  example: 'contact@votrecabinet.ma au lieu d’un Gmail personnel.',
  points: [
    'Service séparé, non inclus dans le prix du site.',
    'Mise en place gratuite de notre côté, quel que soit le nombre de boîtes.',
    'Vous restez propriétaire du compte Google (Gmail, Drive inclus).',
    `Vous payez uniquement Google, directement, environ 70 à 90${NBSP}MAD/mois par boîte email.`,
    'Le prix du site ne change pas.',
  ],
};

// ---------------------------------------------------------------------------
// 9. Questions fréquentes
// ---------------------------------------------------------------------------

export const faq = {
  eyebrow: 'FAQ',
  title: 'Questions fréquentes.',
  items: [
    {
      q: `Puis-je modifier mes projets moi-même${NBSP}?`,
      a: [
        'Oui, avec les offres Portfolio et Cabinet. Vous ajoutez vos projets sans nous rappeler.',
        'Une formation est incluse. Avec l’offre Vitrine, vous ne gérez pas les projets vous-même.',
      ],
    },
    {
      q: `Combien de temps ça prend${NBSP}?`,
      a: [
        'Vitrine : 2 à 3 semaines. Portfolio : 3 à 4 semaines. Cabinet : 5 à 6 semaines.',
      ],
    },
    {
      q: `Comment se passe le paiement${NBSP}?`,
      a: [
        `En trois fois : 40${NBSP}% à la commande, 40${NBSP}% aux maquettes et 20${NBSP}% au lancement.`,
      ],
    },
    {
      q: `Qu’est-ce qu’une modification${NBSP}?`,
      a: [
        'C’est ajouter, retirer ou modifier une page. Ce n’est pas la création d’un nouveau site.',
        'Selon la formule, vous avez 1 modification tous les 3 mois ou chaque mois.',
      ],
    },
    {
      q: `Ai-je besoin d’une messagerie professionnelle${NBSP}?`,
      a: [
        'C’est un service séparé, non inclus dans le prix du site. Il vous donne une adresse comme contact@votrecabinet.ma.',
        `La mise en place est gratuite. Vous payez uniquement Google, environ 70 à 90${NBSP}MAD/mois par boîte.`,
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 10. À propos
// ---------------------------------------------------------------------------

export const about = {
  eyebrow: 'À propos',
  title: 'Qui est derrière BPTechLabs.',
  // TODO(owner): remplacer ces trois lignes par votre présentation.
  lines: [
    'Texte à compléter : qui vous êtes, en une phrase.',
    'Texte à compléter : pourquoi vous travaillez avec les architectes.',
    'Texte à compléter : comment vous travaillez avec vos clients.',
  ],
  // TODO(owner): remplacer src/assets/about-placeholder.png par votre photo.
  photoAlt: 'Photo du fondateur de BPTechLabs (à remplacer)',
};

// ---------------------------------------------------------------------------
// 11. Appel final et pied de page
// ---------------------------------------------------------------------------

export const closing = {
  title: 'Parlons de votre site',
  text: 'Un message suffit pour commencer.',
  phoneLabel: 'Ou notez le numéro :',
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} BPTechLabs`,
};

// ---------------------------------------------------------------------------
// Libellés d'interface (accessibilité, langue)
// ---------------------------------------------------------------------------

export const ui = {
  lang: 'fr',
  ogLocale: 'fr_MA',
  newTab: '(nouvel onglet)',
  mainNav: 'Navigation principale',
  mobileNav: 'Navigation mobile',
  compareRowHeader: 'Prestation',
  exampleAlt: (name: string, plan: string) => `${name} : exemple de site, formule ${plan}`,
  percent: (n: number) => `${n}${NBSP}%`,
  quote: (s: string) => `«${NBSP}${s}${NBSP}»`,
  // Lien vers l'autre langue (en-tête).
  switchTo: { href: '/en/', lang: 'en', short: 'EN', label: 'English version' },
};

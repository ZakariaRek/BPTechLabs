// All English copy for the site (served at /en/).
// Same structure as content.fr.ts: keep both files in sync when you edit one.
// TODO(owner): proofread this translation.

import type { ExampleImage, Plan, ProblemIcon, Review } from './content.fr';

const NBSP = String.fromCharCode(160); // non-breaking space

/** "12,900" → "12,900 MAD incl. VAT" with non-breaking spaces. */
export const mad = (amount: string, suffix = 'incl. VAT') =>
  `${amount}${NBSP}MAD${suffix ? NBSP + suffix.replace(/ /g, NBSP) : ''}`;

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const contact = {
  whatsappUrl:
    'https://wa.me/212644925581?text=Hello%20BPTechLabs%2C%20I%20would%20like%20a%20website%20for%20my%20architecture%20firm.',
  whatsappLabel: 'Message us on WhatsApp',
  phoneDisplay: `+212${NBSP}6${NBSP}44${NBSP}92${NBSP}55${NBSP}81`,
  phoneE164: '+212644925581',
  domain: 'bptechlabs.com',
  siteUrl: 'https://bptechlabs.com/en/',
};

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const meta = {
  title: 'BPTechLabs · Websites for architecture firms in Morocco',
  description:
    'Custom websites for architecture firms in Morocco: showcase your projects and be found on Google. From 7,500 MAD incl. VAT.',
  ogImage: '/og-image.png', // TODO(owner): replace with a real 1200x630 image.
  ogImageAlt: 'BPTechLabs, websites for architecture firms',
  brand: 'BPTechLabs',
};

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

export const nav = {
  links: [
    { href: '#exemples', label: 'Examples' },
    { href: '#offres', label: 'Plans' },
    { href: '#processus', label: 'Process' },
    { href: '#faq', label: 'FAQ' },
  ],
  menuLabel: 'Menu',
  skipLink: 'Skip to content',
};

// ---------------------------------------------------------------------------
// 1. Hero
// ---------------------------------------------------------------------------

export const hero = {
  title: `Your firm deserves better than an Instagram${NBSP}page`,
  subtitle:
    'Custom websites for architecture firms, to showcase your projects and be found on Google.',
  note: `From ${mad('7,500')} · Delivered in 2${NBSP}to${NBSP}6${NBSP}weeks`,
  mockup: {
    url: 'atelier-trame.ma',
    name: 'Atelier Trame',
    links: ['Projects', 'Studio', 'Contact'],
    heading: 'Architecture & interiors',
    projects: ['Villa, Rabat', 'Offices, Casablanca', 'Riad, Marrakech'],
    label: 'Preview of an architect’s website (example)',
  },
};

// ---------------------------------------------------------------------------
// 2. Problem and solution
// ---------------------------------------------------------------------------

export const problem: { eyebrow: string; title: string; points: { icon: ProblemIcon; text: string }[] } = {
  eyebrow: 'Why a website',
  title: 'Your future clients are looking for you online.',
  points: [
    {
      icon: 'search',
      text: 'A client looking for an architect first types their name into Google.',
    },
    {
      icon: 'grid',
      text: 'A clear website with your projects stands out against a simple Instagram page.',
    },
    {
      icon: 'ruler',
      text: 'Every site is custom-made for your firm. You decide what you want to see.',
    },
  ],
};

// ---------------------------------------------------------------------------
// 3. Examples
// ---------------------------------------------------------------------------

export const examples: {
  eyebrow: string;
  title: string;
  tag: string;
  items: { plan: string; name: string; url: string; image: ExampleImage }[];
} = {
  eyebrow: 'Examples',
  title: 'What your website could look like.',
  tag: 'Demo example',
  items: [
    { plan: 'Vitrine', name: 'Atelier Trame', url: 'atelier-trame.ma', image: 'vitrine' },
    { plan: 'Portfolio', name: 'Studio Socle', url: 'studio-socle.ma', image: 'portfolio' },
    { plan: 'Cabinet', name: 'Axe & Plan Architectes', url: 'axe-et-plan.ma', image: 'cabinet' },
  ],
};

// ---------------------------------------------------------------------------
// 4. Reviews
// ---------------------------------------------------------------------------

export const reviewsSection = {
  eyebrow: 'Reviews',
  title: 'What our clients say.',
};

// Keep empty until there are real reviews: the section stays hidden.
// TODO(owner): add real client reviews (with their consent). Never invent any.
export const reviews: Review[] = [];

// ---------------------------------------------------------------------------
// 5. Plans
// ---------------------------------------------------------------------------

// Plan names (Vitrine, Portfolio, Cabinet) are kept as product names in both languages.
export const offers = {
  eyebrow: 'Plans',
  title: 'Three plans, depending on your needs.',
  priceUnit: `MAD${NBSP}incl.${NBSP}VAT`,
  deliveryLabel: 'Delivery:',
  recommendedLabel: 'Recommended',
  plans: [
    {
      id: 'portfolio',
      name: 'Portfolio',
      price: '12,900',
      quote: 'You add your projects without calling us.',
      features: [
        'Everything in Vitrine',
        'You manage your projects yourself',
        'Sorted gallery (residential, offices, interiors)',
        '10 to 15 projects',
        'Training + 1 month of support',
      ],
      delivery: '3 to 4 weeks',
      recommended: true,
    },
    {
      id: 'vitrine',
      name: 'Vitrine',
      price: '7,500',
      quote: 'A real website, not an Instagram page.',
      features: [
        '5 to 7 pages',
        'Contact, WhatsApp, map',
        'Works on mobile',
        'You do not manage the projects yourself',
      ],
      delivery: '2 to 3 weeks',
    },
    {
      id: 'cabinet',
      name: 'Cabinet',
      price: '18,900',
      quote: 'A brand tool, not a brochure.',
      features: [
        'Everything in Portfolio',
        'In French and English',
        'News section',
        'Detailed contact form',
        '3 months of support',
      ],
      delivery: '5 to 6 weeks',
    },
  ] satisfies Plan[],
  compare: {
    caption: 'Compare the plans',
    columns: ['Vitrine', 'Portfolio', 'Cabinet'],
    included: 'Included',
    notIncluded: 'Not included',
    rows: [
      { label: 'Price', values: [mad('7,500'), mad('12,900'), mad('18,900')] },
      { label: 'Delivery', values: ['2 to 3 wks', '3 to 4 wks', '5 to 6 wks'] },
      { label: '5 to 7 pages', values: [true, true, true] },
      { label: 'Contact, WhatsApp, map', values: [true, true, true] },
      { label: 'Works on mobile', values: [true, true, true] },
      { label: 'You manage your projects', values: [false, true, true] },
      { label: 'Sorted gallery', values: [false, true, true] },
      { label: '10 to 15 projects', values: [false, true, true] },
      { label: 'Training', values: [false, true, true] },
      { label: 'Support', values: [false, '1 month', '3 months'] },
      { label: 'French and English', values: [false, false, true] },
      { label: 'News section', values: [false, false, true] },
      { label: 'Detailed contact form', values: [false, false, true] },
    ] as { label: string; values: (string | boolean)[] }[],
  },
};

// ---------------------------------------------------------------------------
// 6. Process
// ---------------------------------------------------------------------------

export const process = {
  eyebrow: 'Process',
  title: 'Four steps, from first call to launch.',
  steps: [
    { name: 'Discussion', text: 'You tell us about your firm and your projects.' },
    { name: 'Mockups', text: 'You approve the look of the site before it is built.' },
    { name: 'Building the site', text: 'We build the site with your projects.' },
    { name: 'Launch', text: 'Your site is online and your clients can see it.' },
  ],
  paymentTitle: 'Pay in three instalments',
  payments: [
    { share: 40, label: 'on order' },
    { share: 40, label: 'at mockups' },
    { share: 20, label: 'at launch' },
  ],
};

// ---------------------------------------------------------------------------
// 7. After launch
// ---------------------------------------------------------------------------

export const maintenance = {
  eyebrow: 'After launch',
  title: 'We look after the site. You look after your projects.',
  priceUnit: `MAD${NBSP}incl.${NBSP}VAT${NBSP}/ month`,
  plans: [
    {
      price: '300',
      frequency: '1 change every 3 months',
      yearly: `Yearly plan ${mad('3,000', '')} (2 months free), payable in 2${NBSP}instalments.`,
    },
    {
      price: '400',
      frequency: '1 change every month',
      yearly: `Yearly plan ${mad('4,000', '')} (2 months free), payable in 2${NBSP}instalments.`,
    },
  ],
  included: ['Website hosting and upkeep', 'Renewal of your .ma domain name'],
  note: 'A change means adding, removing or editing a page. It is not building a new website.',
};

// ---------------------------------------------------------------------------
// 8. Professional email
// ---------------------------------------------------------------------------

export const email = {
  eyebrow: 'Optional',
  title: 'Email addresses in your name.',
  example: 'contact@yourfirm.ma instead of a personal Gmail.',
  points: [
    'Separate service, not included in the website price.',
    'Free setup on our side, whatever the number of mailboxes.',
    'You stay the owner of the Google account (Gmail, Drive included).',
    `You only pay Google, directly, about 70 to 90${NBSP}MAD/month per mailbox.`,
    'The website price does not change.',
  ],
};

// ---------------------------------------------------------------------------
// 9. FAQ
// ---------------------------------------------------------------------------

export const faq = {
  eyebrow: 'FAQ',
  title: 'Frequently asked questions.',
  items: [
    {
      q: 'Can I update my projects myself?',
      a: [
        'Yes, with the Portfolio and Cabinet plans. You add your projects without calling us.',
        'Training is included. With the Vitrine plan, you do not manage the projects yourself.',
      ],
    },
    {
      q: 'How long does it take?',
      a: ['Vitrine: 2 to 3 weeks. Portfolio: 3 to 4 weeks. Cabinet: 5 to 6 weeks.'],
    },
    {
      q: 'How does payment work?',
      a: ['In three instalments: 40% on order, 40% at mockups and 20% at launch.'],
    },
    {
      q: 'What is a change?',
      a: [
        'Adding, removing or editing a page. It is not building a new website.',
        'Depending on your plan, you get 1 change every 3 months or every month.',
      ],
    },
    {
      q: 'Do I need a professional email?',
      a: [
        'It is a separate service, not included in the website price. It gives you an address like contact@yourfirm.ma.',
        `Setup is free. You only pay Google, about 70 to 90${NBSP}MAD/month per mailbox.`,
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 10. About
// ---------------------------------------------------------------------------

export const about = {
  eyebrow: 'About',
  title: 'Who is behind BPTechLabs.',
  // TODO(owner): replace these three lines with your own introduction.
  lines: [
    'To be written: who you are, in one sentence.',
    'To be written: why you work with architects.',
    'To be written: how you work with your clients.',
  ],
  photoAlt: 'Photo of the founder of BPTechLabs (to be replaced)',
};

// ---------------------------------------------------------------------------
// 11. Closing call to action and footer
// ---------------------------------------------------------------------------

export const closing = {
  title: 'Let’s talk about your website',
  text: 'One message is enough to get started.',
  phoneLabel: 'Or write down the number:',
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} BPTechLabs`,
};

// ---------------------------------------------------------------------------
// Interface labels (accessibility, language)
// ---------------------------------------------------------------------------

export const ui = {
  lang: 'en',
  ogLocale: 'en_US',
  newTab: '(opens in a new tab)',
  mainNav: 'Main navigation',
  mobileNav: 'Mobile navigation',
  compareRowHeader: 'Feature',
  exampleAlt: (name: string, plan: string) => `${name}: example website, ${plan} plan`,
  percent: (n: number) => `${n}%`,
  quote: (s: string) => `“${s}”`,
  switchTo: { href: '/', lang: 'fr', short: 'FR', label: 'Version française' },
};

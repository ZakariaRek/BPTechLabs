# BPTechLabs: landing page

Site d'une page en deux langues (français par défaut, anglais sur /en/), Astro (sortie statique) + Tailwind CSS.

## Lancer en local

Il faut Node.js 20 ou plus récent.

```bash
npm install
npm run dev
```

Ouvrir http://localhost:4321.

## Construire

```bash
npm run build
```

Le site final est généré dans le dossier `dist/`. Pour le vérifier avant de le mettre en ligne :

```bash
npm run preview
```

## Mettre en ligne (sans Git)

**Cloudflare Pages** : Workers & Pages > Create > Pages > *Upload assets*. Donnez un nom au projet, glissez le dossier `dist/`, puis Deploy. Ajoutez ensuite le domaine `bptechlabs.com` dans *Custom domains*.

**Netlify** : ouvrez https://app.netlify.com/drop et glissez le dossier `dist/`. Ajoutez ensuite le domaine dans *Domain management*.

À chaque modification : `npm run build`, puis glissez de nouveau `dist/`.

## Modifier le contenu

- **Textes français** : `src/content.fr.ts` (prix, offres, FAQ, numéro et lien WhatsApp).
- **Textes anglais** : `src/content.en.ts`, même structure. Modifiez les deux fichiers ensemble.
- **Captures des exemples** : remplacer `src/assets/examples/vitrine.png`, `portfolio.png`, `cabinet.png` (même nom, idéalement 1600x1000 px). Elles sont converties automatiquement en AVIF/WebP au build.
- **Photo À propos** : `src/assets/about-placeholder.png` (portrait 4:5).
- **Image de partage** (WhatsApp, réseaux sociaux) : `public/og-image.png`, 1200x630 px.
- **Favicon** : `public/favicon.svg` et `public/apple-touch-icon.png` (180x180).
- **Avis clients** : ajouter des entrées au tableau `reviews` dans `src/content.fr.ts` (et `content.en.ts`). La section s'affiche seule dès qu'il y a un avis.

## Langues

- **Français (langue par défaut)** : https://bptechlabs.com/
- **Anglais** : https://bptechlabs.com/en/

Le lien FR / EN de l'en-tête passe d'une version à l'autre. Chaque page a son `lang`, son adresse canonique et des balises `hreflang` pour Google. Il n'y a pas de redirection automatique selon la langue du navigateur : Google et WhatsApp voient toujours la bonne version.

## Animations

Tout est en CSS, sans bibliothèque. Au chargement, le titre apparaît mot par mot et la maquette du hero « se construit ». Au défilement, les blocs apparaissent et les lignes se tracent, selon la position de la page : rien n'attend un déclencheur, et les navigateurs qui ne gèrent pas ces effets affichent simplement le contenu. Si l'appareil demande moins d'animations (réglage d'accessibilité), tout s'affiche sans mouvement. Réglages dans `src/styles/global.css`, section Motion.

## Mesure d'audience

Aucun outil installé. Un emplacement commenté se trouve dans `src/layouts/Base.astro`. Chaque bouton WhatsApp porte `data-track="whatsapp"` et `data-placement="..."` (header, hero, offre-portfolio, final, floating...).

## Structure

```
src/
  content.fr.ts        textes français (langue par défaut)
  content.en.ts        textes anglais
  i18n.ts              choix de la langue selon l'adresse (/ ou /en/)
  layouts/Base.astro   <head>, SEO, Open Graph, JSON-LD
  pages/index.astro    page française
  pages/en/index.astro page anglaise
  components/LandingPage.astro  ordre des sections (commun aux deux langues)
  components/          une section par fichier
  styles/global.css    couleurs, polices, styles de base
public/                robots.txt, sitemap.xml, favicon, image OG
```

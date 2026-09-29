# BPTechLabs: landing page

Site d'une seule page, Astro (sortie statique) + Tailwind CSS.

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

- **Tous les textes** : `src/content.fr.ts` (prix, offres, FAQ, numéro WhatsApp, lien WhatsApp).
- **Captures des exemples** : remplacer `src/assets/examples/vitrine.png`, `portfolio.png`, `cabinet.png` (même nom, idéalement 1600x1000 px). Elles sont converties automatiquement en AVIF/WebP au build.
- **Photo À propos** : `src/assets/about-placeholder.png` (portrait 4:5).
- **Image de partage** (WhatsApp, réseaux sociaux) : `public/og-image.png`, 1200x630 px.
- **Favicon** : `public/favicon.svg` et `public/apple-touch-icon.png` (180x180).
- **Avis clients** : ajouter des entrées au tableau `reviews` dans `src/content.fr.ts`. La section s'affiche seule dès qu'il y a un avis.

## Mesure d'audience

Aucun outil installé. Un emplacement commenté se trouve dans `src/layouts/Base.astro`. Chaque bouton WhatsApp porte `data-track="whatsapp"` et `data-placement="..."` (header, hero, offre-portfolio, final, floating...).

## Structure

```
src/
  content.fr.ts        tous les textes
  layouts/Base.astro   <head>, SEO, Open Graph, JSON-LD
  pages/index.astro    ordre des sections
  components/          une section par fichier
  styles/global.css    couleurs, polices, styles de base
public/                robots.txt, sitemap.xml, favicon, image OG
```

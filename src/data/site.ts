// Infos personnelles affichées sur le site.
// Une valeur vide ('') masque l'élément correspondant sur le site publié
// (en local, un repère rose « à compléter » s'affiche à la place).
export const site = {
  name: 'Christopher Sauzon',
  email: '', // ex. 'prenom.nom@exemple.com'
  github: 'https://github.com/ChrisGardian',
  linkedin: '', // ex. 'https://www.linkedin.com/in/...'
  // Déposer le PDF dans public/cv/ puis indiquer son chemin, ex. '/cv/christopher-sauzon-cv.pdf'
  cv: { fr: '', en: '' },
  // Photo : déposer le fichier dans src/assets/ puis l'importer dans src/components/Hero.astro
};

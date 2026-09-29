export const languages = { fr: 'FR', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

export const ui = {
  fr: {
    'meta.description':
      'Portfolio de Christopher Sauzon, développeur jeu vidéo et logiciel : Unreal, Unity, C++, C#, Python.',
    'nav.projects': 'Projets',
    'nav.3d': '3D',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Portfolio',
    'hero.role': '<b>Développeur</b> jeu vidéo &amp; logiciel',
    'hero.pitch':
      'Développeur C++, C# et Python. Je travaille aussi bien sur des moteurs de jeu (Unreal, Unity) que sur des applications web.',
    'hero.cta': 'Voir les projets',
    'hero.photo': '[ ta photo ]',
    'projects.title': 'Projets',
    'projects.more': 'Voir',
    'projects.draft': 'Brouillon',
    '3d.title': '3D',
    '3d.subtitle': 'Modélisation, simulation et rendu sous Blender.',
    'contact.title': 'Contact',
    'contact.text':
      'Je cherche un poste en développement de jeux ou en développement logiciel. Le plus simple : un email.',
    'contact.copied': 'copié',
    'contact.languages': 'Français · Deutsch · English',
    'contact.location': '[Ville, pays] · mobilité ?',
    'contact.availability': 'Disponible à partir de [date]',
    'project.back': 'Tous les projets',
    'project.video': 'Vidéo',
    'project.gallery': 'Images',
    'project.next': 'Projet suivant',
    'project.videoPlay': 'Lire la vidéo',
    'project.videoTodo': 'Vidéo YouTube à ajouter (youtubeId)',
    'todo': 'à compléter',
  },
  en: {
    'meta.description':
      'Portfolio of Christopher Sauzon, game and software developer: Unreal, Unity, C++, C#, Python.',
    'nav.projects': 'Projects',
    'nav.3d': '3D',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Portfolio',
    'hero.role': '<b>Game</b> &amp; software <b>developer</b>',
    'hero.pitch':
      'C++, C# and Python developer. I work on game engines (Unreal, Unity) as well as web applications.',
    'hero.cta': 'See projects',
    'hero.photo': '[ your photo ]',
    'projects.title': 'Projects',
    'projects.more': 'View',
    'projects.draft': 'Draft',
    '3d.title': '3D',
    '3d.subtitle': 'Modeling, simulation and rendering in Blender.',
    'contact.title': 'Contact',
    'contact.text':
      "I'm looking for a position in game development or software development. Email is the easiest way to reach me.",
    'contact.copied': 'copied',
    'contact.languages': 'Français · Deutsch · English',
    'contact.location': '[City, country] · relocation?',
    'contact.availability': 'Available from [date]',
    'project.back': 'All projects',
    'project.video': 'Video',
    'project.gallery': 'Images',
    'project.next': 'Next project',
    'project.videoPlay': 'Play video',
    'project.videoTodo': 'YouTube video to add (youtubeId)',
    'todo': 'to fill in',
  },
} as const;

export type UiKey = keyof (typeof ui)['fr'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

/** Préfixe d'URL d'une langue : '' pour le français, '/en' pour l'anglais. */
export function langPrefix(lang: Lang): string {
  return lang === defaultLang ? '' : `/${lang}`;
}

/** Chemin d'une page dans une langue donnée, ex. localePath('en', '/projects/lipsync'). */
export function localePath(lang: Lang, path = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  const full = `${langPrefix(lang)}${p}`;
  return full === '' ? '/' : full;
}

/** Même page dans l'autre langue, à partir du chemin courant. */
export function switchLangPath(pathname: string, to: Lang): string {
  const withoutLang = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return localePath(to, withoutLang);
}

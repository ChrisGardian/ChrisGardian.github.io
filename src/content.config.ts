import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un projet = un fichier Markdown par langue : src/content/projects/<lang>/<slug>.md
// L'id généré est "<lang>/<slug>" (ex. "fr/lipsync").
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      // Ordre d'affichage sur l'accueil (1 = en premier)
      order: z.number(),
      // Grande carte en haut de la liste
      featured: z.boolean().default(false),
      // Petite étiquette au-dessus du titre (ex. « Thèse de Bachelor »)
      label: z.string().optional(),
      // Pastille sur l'image (ex. « Jouable »)
      badge: z
        .object({ text: z.string(), tone: z.enum(['green', 'pink', 'blue']).default('pink') })
        .optional(),
      tags: z.array(z.string()),
      cover: image(),
      coverAlt: z.string(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
      // Infos affichées dans l'encadré de la page projet
      facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
      // Identifiant d'une vidéo YouTube (non répertoriée), ex. "dQw4w9WgXcQ"
      youtubeId: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      // true = visible seulement en local (npm run dev), jamais publié
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };

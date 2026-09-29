import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** Les brouillons ne sont visibles qu'en local (npm run dev). */
const showDrafts = import.meta.env.DEV;

export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection(
    'projects',
    (p) => p.id.startsWith(`${lang}/`) && (showDrafts || !p.data.draft),
  );
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** "fr/lipsync" -> "lipsync" */
export function slugOf(project: Project): string {
  return project.id.split('/').slice(1).join('/');
}

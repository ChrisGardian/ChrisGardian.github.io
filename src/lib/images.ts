import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/** Version grand format (max 2000 px de large, en WebP) pour la visionneuse. */
export async function fullSize(src: ImageMetadata): Promise<string> {
  if (src.format === 'svg') return src.src;
  const img = await getImage({ src, width: Math.min(src.width, 2000), format: 'webp' });
  return img.src;
}

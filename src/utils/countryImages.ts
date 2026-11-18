import type { ImageMetadata } from 'astro';
import bosnia from '@/assets/countries/flags/bosnia.jpg';
import czechRepublic from '@/assets/countries/flags/czech-republic.jpg';
import romania from '@/assets/countries/flags/romania.jpg';
import slovakia from '@/assets/countries/flags/slovakia.jpg';

// Envato Elements flag photos licensed to https://cmiworld.org (certificates in cmiworld.org_image_licenses).
// These override the WordPress featured image for the /countries cards.
const flagOverrides: Record<string, ImageMetadata> = {
	bosnia,
	'czech-republic': czechRepublic,
	romania,
	slovakia,
};

export function getCountryCardImage(slug: string, fallback: string): ImageMetadata | string {
	return flagOverrides[slug] ?? fallback;
}

// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getArtworkDetailBySlug({ locale, slug }: LocaleSlugParam) {
  return await apiFetch(`/Artwork/artworks`, {
    query: { locale, slug },
    tags: [apiTags(locale, 'artworks', slug)],
    revalidate: 60,
  })
}

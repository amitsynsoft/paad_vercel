// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { APIParams } from '@/types/manar/api'

export async function getArtworks({ locale, keywords, location, medium }: APIParams) {
  return await apiFetch('/Artwork/artwork_list', {
    query: { locale: locale, keywords, location, medium },
    tags: [apiTags(locale, 'artworks')],
    revalidate: 60,
  })
}

// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleParam } from '@/types/manar/api'

export async function getArtworks({ locale }: LocaleParam) {
  return await apiFetch('/Artwork/artwork_list', {
    query: { locale: locale },
    tags: [apiTags(locale, 'artworks')],
    revalidate: 60,
  })
}

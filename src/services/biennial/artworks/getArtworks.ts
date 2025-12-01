import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getArtworks({ locale }: LocaleSlugParam) {
  return await apiFetch('/artwork/artwork_list', {
    query: { locale },
    tags: [apiTags(locale, 'biennial', 'artworks')],
    org: 'Biennial',
    revalidate: 60,
  })
}

export async function getArtworkDetailBySlug({ locale, slug }: LocaleSlugParam) {
  return await apiFetch('/artwork/artworks', {
    query: { locale, slug },
    tags: [apiTags(locale, 'biennial', 'artworkDetail')],
    org: 'Biennial',
    revalidate: 60,
  })
}

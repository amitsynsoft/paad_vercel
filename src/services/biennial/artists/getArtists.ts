import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getArtists({ locale, slug = 'artists' }: LocaleSlugParam) {
  return await apiFetch('/artist/artistlist', {
    query: { locale, slug },
    tags: [apiTags(locale, 'biennial', slug)],
    org: 'Biennial',
    revalidate: 60,
  })
}

export async function getArtistBySlug({ locale, slug }: LocaleSlugParam) {
  return await apiFetch('/artist/artists', {
    query: { locale, slug },
    tags: [apiTags(locale, 'biennial', slug)],
    org: 'Biennial',
    revalidate: 60,
  })
}

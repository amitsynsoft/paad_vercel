// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getArtistDetailBySlug({ locale, slug }: LocaleSlugParam) {
  return await apiFetch('/Artist/artists', {
    query: { locale, slug },
    tags: [apiTags(locale, 'artists', slug)],
    revalidate: 60,
  })
}

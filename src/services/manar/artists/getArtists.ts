// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleParam } from '@/types/manar/api'

export async function getArtists({ locale }: LocaleParam) {
  return await apiFetch('/Artist/artistlist', {
    query: { locale: locale },
    tags: [apiTags(locale, 'artists')],
    revalidate: 60,
  })
}

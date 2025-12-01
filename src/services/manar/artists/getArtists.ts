// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { APIParams } from '@/types/manar/api'

export async function getArtists({ locale, keywords, location }: APIParams) {
  return await apiFetch('/Artist/artistlist', {
    query: { locale: locale, keywords, location },
    tags: [apiTags(locale, 'artists')],
    revalidate: 60,
  })
}

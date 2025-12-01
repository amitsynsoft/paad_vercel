// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getCuratorialDetailBySlug({ locale, slug }: LocaleSlugParam) {
  return await apiFetch('/Curator/curators', {
    query: { locale, slug },
    tags: [apiTags(locale, 'curatorial', slug)],
    revalidate: 60,
  })
}

// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleParam } from '@/types/manar/api'

export async function getCuratorial({ locale }: LocaleParam) {
  return await apiFetch('/Curatorial/curatoriallist', {
    query: { locale: locale },
    tags: [apiTags(locale, 'curatorial')],
    revalidate: 60,
  })
}

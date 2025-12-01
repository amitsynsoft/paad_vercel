// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleParam } from '@/types/manar/api'

export async function getProgrammes({ locale }: LocaleParam) {
  return await apiFetch('/Programme/programlist', {
    query: { locale: locale },
    tags: [apiTags(locale, 'programmes')],
    revalidate: 60,
  })
}

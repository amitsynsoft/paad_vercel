// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getNewsDetailBySlug({ locale, slug }: LocaleSlugParam) {
  return await apiFetch('/News/news', {
    query: { locale, slug },
    tags: [apiTags(locale, 'news', slug)],
    revalidate: 60,
  })
}

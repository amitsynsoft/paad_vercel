// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getHomeManarPage({ locale, slug = 'home-page' }: LocaleSlugParam) {
  return await apiFetch('/Page/pages', {
    query: { locale, slug },
    tags: [apiTags(locale, 'home', slug)],
    revalidate: 60,
  })
}

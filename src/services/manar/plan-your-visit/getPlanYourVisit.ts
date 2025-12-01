// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getPlanYourVisit({ locale, slug = 'plan-your-visit' }: LocaleSlugParam) {
  return await apiFetch('/Page/pages', {
    query: { locale, slug },
    tags: [apiTags(locale, 'plan-your-visit', slug)],
    revalidate: 60,
  })
}

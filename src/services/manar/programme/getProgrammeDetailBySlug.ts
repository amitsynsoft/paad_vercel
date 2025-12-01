// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getProgrammeDetailBySlug({ locale, slug }: LocaleSlugParam) {
  return await apiFetch('/Programme/programs', {
    query: { locale, slug },
    tags: [apiTags(locale, 'programs', slug)],
    revalidate: 60,
  })
}

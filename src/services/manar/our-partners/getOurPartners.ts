// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getOurPartners({ locale, slug = '' }: LocaleSlugParam) {
  return await apiFetch('/Page/OurPartners', {
    query: { locale, slug },
    tags: [apiTags(locale, 'OurPartners', slug)],
    revalidate: 60,
  })
}

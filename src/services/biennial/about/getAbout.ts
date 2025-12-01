import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getBiennialAbout({ locale, slug = 'about-us' }: LocaleSlugParam) {
  return await apiFetch('/Page/pages', {
    query: { locale, slug },
    tags: [apiTags(locale, 'biennial', slug)],
    org: 'Biennial',
    revalidate: 60,
  })
}

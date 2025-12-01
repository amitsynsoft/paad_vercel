import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getBiennialHome({ locale, slug = 'home-biennial' }: LocaleSlugParam) {
  return await apiFetch('/Page/pages', {
    query: { locale, slug },
    tags: [apiTags(locale, 'biennial', slug)],
    org: 'Biennial',
    revalidate: 60,
  })
}

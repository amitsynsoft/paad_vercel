import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { APIParams } from '@/types/manar/api'

export async function getPrograms({ locale, filter }: APIParams) {
  console.log('filter: ', filter)
  return await apiFetch('/Programme/programlist', {
    query: { locale, eventFilter: filter },
    tags: [apiTags(locale, 'biennial', 'programs')],
    org: 'Biennial',
    revalidate: 60,
  })
}

export async function getProgramDetailBySlug({ locale, slug }: APIParams) {
  return await apiFetch('/Programme/programs', {
    query: { locale, slug },
    tags: [apiTags(locale, 'biennial', 'programs')],
    org: 'Biennial',
    revalidate: 60,
  })
}

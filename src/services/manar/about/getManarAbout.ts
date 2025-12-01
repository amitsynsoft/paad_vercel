import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { AboutPageDTO } from '@/dto/manar'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getManarAboutPage({ locale, slug = 'about-manar' }: LocaleSlugParam): Promise<any> {
  return await apiFetch<any>('/Page/pages', {
    query: { locale: locale, slug: slug },
    tags: [apiTags(locale, 'about', slug)],
    revalidate: 60,
  })
}

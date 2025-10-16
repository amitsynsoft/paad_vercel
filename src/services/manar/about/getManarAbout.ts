import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { AboutPageDTO } from '@/dto/manar'
import { LocaleSlugParam } from '@/types/manar/api'

export async function getManarAboutPage({ locale, slug = 'about-manar' }: LocaleSlugParam): Promise<AboutPageDTO> {
  return await apiFetch<AboutPageDTO>('/Page/pages', {
    query: { locale: locale, slug: slug },
    tags: [apiTags(locale, 'about', slug)],
    revalidate: 60,
  })
}

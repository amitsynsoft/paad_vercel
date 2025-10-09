import { AboutPageDTO } from '@/dto/manar'
import { apiFetch } from '@/lib/api'

export async function getManarAboutPage({ locale, slug = 'about-manar' }: { locale: string; slug: string }): Promise<AboutPageDTO> {
  return await apiFetch<AboutPageDTO>('/Page/pages', {
    query: { locale: locale, slug: slug },
    tags: [`${locale}-about-${slug}`],
    revalidate: 60,
  })
}

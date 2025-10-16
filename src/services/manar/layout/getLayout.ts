// src/services/page.ts
import { FooterDTO, HeaderDTO } from '@/dto/manar'
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleParam } from '@/types/manar/api'

export async function getHeaderManar({ locale }: LocaleParam): Promise<HeaderDTO> {
  return await apiFetch<HeaderDTO>('/layout/header', {
    query: { locale: locale },
    tags: [apiTags(locale, 'header')],
    revalidate: 60,
  })
}

export async function getFooterManar({ locale }: LocaleParam): Promise<FooterDTO> {
  return await apiFetch<FooterDTO>('/layout/footer', {
    query: { locale: locale },
    tags: [apiTags(locale, 'footer')],
    revalidate: 60,
  })
}

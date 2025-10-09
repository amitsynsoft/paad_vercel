// src/services/page.ts
import { FooterDTO, HeaderDTO } from '@/dto/manar'
import { apiFetch } from '@/lib/api'

export async function getHeaderManar({ locale }: { locale: string }): Promise<HeaderDTO> {
  return await apiFetch<HeaderDTO>('/layout/header', {
    query: { locale: locale },
    tags: [`${locale}-manar-header`],
    revalidate: 60,
  })
}

export async function getFooterManar({ locale }: { locale: string }): Promise<FooterDTO> {
  return await apiFetch<FooterDTO>('/layout/footer', {
    query: { locale: locale },
    tags: [`${locale}-manar-footer`],
    revalidate: 60,
  })
}

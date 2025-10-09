// src/services/page.ts
import { apiFetch } from '@/lib/api'

export async function getHeaderBiennial(locale: string) {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL_BIENNIAL}/paad/layout/header?locale=${locale}&organizationName=Biennial`

  return apiFetch(url, {
    tags: [`${locale}-biennial-header`],
    revalidate: 60,
  })
}

export async function getFooterBiennial(locale: string) {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL_BIENNIAL}/paad/layout/footer?locale=${locale}&organizationName=Biennial`

  return apiFetch(url, {
    tags: [`${locale}-biennial-footer`],
    revalidate: 60,
  })
}

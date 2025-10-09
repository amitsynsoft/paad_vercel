// src/services/page.ts
import { apiFetch } from '@/lib/api'

export async function getLandingPage(locale: string, slug: string = '/') {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL_BIENNIAL}/paad/Page/pages?locale=${locale}&slug=${slug}&organizationName=Biennial`

  return apiFetch(url, {
    tags: [`${locale}-biennial-${slug || 'home'}`],
    revalidate: 60,
  })
}

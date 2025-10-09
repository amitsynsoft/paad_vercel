// src/services/page.ts
import { apiFetch } from '@/lib/api'

export async function getBiennialHome(locale: string, slug: string = 'home-biennial') {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL_BIENNIAL}/paad/Page/pages?locale=${locale}&slug=${slug}&organizationName=Biennial`

  return await apiFetch(url, {
    tags: [`${locale}-biennial-${slug}`],
    revalidate: 60,
  })
}

// src/services/page.ts
import { apiFetch } from '@/lib/api'

export async function getHomeManarPage({ locale, slug = 'home-page' }: { locale: string; slug?: string }) {
  return await apiFetch('/Page/pages', {
    query: { locale, slug },
    tags: [`${locale}-home-${slug}`],
    revalidate: 60,
  })
}

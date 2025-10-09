// src/services/page.ts
import { apiFetch } from '@/lib/api'

export async function getArtists({ locale }: { locale: string }) {
  return await apiFetch('/Artist/artistlist', {
    query: { locale: locale },
    tags: [`${locale}-manar-artists`],
    revalidate: 60,
  })
}

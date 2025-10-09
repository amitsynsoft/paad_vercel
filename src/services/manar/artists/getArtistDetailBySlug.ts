// src/services/page.ts
import { apiFetch } from '@/lib/api'

export async function getArtistDetailBySlug({ locale, slug }: { locale: string; slug: string }) {
  return await apiFetch('/Artist/artists', {
    query: { locale, slug },
    tags: [`${locale}-manar-artists-${slug}`],
    revalidate: 60,
  })
}

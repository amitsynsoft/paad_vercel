// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { apiTags } from '@/utils/api'
import { LocaleParam } from '@/types/manar/api'
import { NewsDTO } from '@/dto/manar/NewsPage.dto'

export async function getNews({ locale }: LocaleParam): Promise<NewsDTO[]> {
  return await apiFetch('/News/news_list', {
    query: { locale: locale },
    tags: [apiTags(locale, 'news')],
    revalidate: 60,
  })
}

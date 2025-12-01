// src/services/page.ts
import { apiFetch } from '@/lib/api'
import { APIParams } from '@/types/biennial/api'

export async function getHeaderBiennial(locale: string) {
  return apiFetch('/layout/header', {
    query: { locale },
    org: 'Biennial',
    tags: [`${locale}-biennial-header`],
  })
}

export async function getFooterBiennial(locale: string) {
  return apiFetch('/layout/footer', {
    query: { locale },
    org: 'Biennial',
    tags: [`${locale}-biennial-footer`],
  })
}

export async function getLabelsBiennial(locale: string) {
  return apiFetch('/layout/labels', {
    query: { locale },
    org: 'Biennial',
    tags: [`${locale}-biennial-labels`],
  })
}

export async function getSearch({ locale, searchTerm }: APIParams) {
  return apiFetch('/common/globalSearch', {
    query: { locale, searchTerm },
    org: 'Biennial',
    tags: [`${locale}-biennial-search`],
  })
}

'use server'

import { ORG_CONFIG } from './api.config'
import { ApiOptions } from './api.type'

export async function apiFetch<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { org = 'Manar', baseUrl, revalidate = 60, tags = [], headers = {}, query = {} } = options

  const orgData = ORG_CONFIG[org]

  if (!orgData) throw new Error(`Invalid organization: ${org}`)

  // merge base URL if passed manually
  const effectiveBaseUrl = baseUrl || orgData.baseUrl

  // Add organizationName automatically if not already in query
  const finalQuery = {
    organizationName: orgData.orgName,
    ...query,
  }

  try {
    // Build query string
    const queryString = Object.entries(finalQuery)
      .filter(([_, v]) => v !== undefined && v !== null)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
      .join('&')

    // Full URL
    const hasFullUrl = /^https?:\/\//i.test(endpoint)
    const fullUrl = hasFullUrl ? endpoint : `${effectiveBaseUrl}${endpoint}`
    const finalUrl = queryString ? `${fullUrl}${fullUrl.includes('?') ? '&' : '?'}${queryString}` : fullUrl

    const res = await fetch(finalUrl, {
      headers: {
        'PublicArt-Subscription-Key': orgData.key,
        ...headers,
      },
      next: { revalidate, tags },
    })

    if (!res.ok) {
      const errorText = await res.text().catch(() => 'Unknown error')
      console.log('======================\n\n\n', errorText, '\n\n\n======================')
      throw new Error(`API Error ${res.status}: ${errorText}`)
    }

    return (await res.json()) as T
  } catch (error: any) {
    console.error('apiFetch failed:', {
      org,
      endpoint,
      query,
      message: error.message,
    })
    throw error
  }
}

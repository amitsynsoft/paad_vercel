// import { getCookie } from '@/utils'
import { getBaseUrl, getKey } from '@/utils'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'apis',
  tagTypes: ['map'],
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    prepareHeaders: (headers, {}) => {
      headers.set('PublicArt-Subscription-Key', `${getKey()}`)
      return headers
    },
  }),
  endpoints: () => ({}),
})

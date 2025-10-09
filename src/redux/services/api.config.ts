// import { getCookie } from '@/utils'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'apis',
  tagTypes: ['map'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL_MANAR,
    prepareHeaders: (headers, {}) => {
      // if (getCookie('access_token')) headers.set('Authorization', `Bearer ${getCookie('access_token')}`)
      headers.set('PublicArt-Subscription-Key', `${process.env.NEXT_PUBLIC_SUBSCRIPTION_KEY!}`)
      return headers
    },
  }),
  endpoints: () => ({}),
})

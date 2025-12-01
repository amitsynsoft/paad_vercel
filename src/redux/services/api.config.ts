// import { getCookie } from '@/utils'
import { getBaseUrl, getKey } from '@/utils'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

let manarTags = ['map', 'programme', 'header', 'footer', 'contact', 'news']
let biennialTags = ['search']

export const api = createApi({
  reducerPath: 'apis',
  tagTypes: [...manarTags, ...biennialTags],
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    prepareHeaders: (headers, {}) => {
      headers.set('PublicArt-Subscription-Key', `${getKey()}`)
      return headers
    },
  }),
  endpoints: () => ({}),
})

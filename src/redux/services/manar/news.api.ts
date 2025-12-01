import { api } from '../api.config'
import { Pagination } from '@/types/manar'
import { PaginationApiResponse } from '@/types/manar'

export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNewsList: builder.query<any, Pagination>({
      query: ({ locale, organizationName }) => ({
        url: `/News/news_list?locale=${locale}&organizationName=${organizationName}`,
        method: 'GET',
        headers: { hideSuccessToast: 'true' },
      }),
      providesTags: ['news'],
    }),
  }),
})

export const { useGetNewsListQuery } = extendedApi

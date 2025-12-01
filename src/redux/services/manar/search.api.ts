import { api } from '../api.config'

export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSearchResults: builder.query<any, { organizationName: string; locale: string; searchTerm?: string }>({
      query: (params) => {
        return {
          url: '/Common/globalSearch',
          method: 'GET',
          headers: { hideSuccessToast: 'true' },
          params: params,
        }
      },
      providesTags: ['programme'],
    }),
  }),
})

export const { useGetSearchResultsQuery, useLazyGetSearchResultsQuery } = extendedApi

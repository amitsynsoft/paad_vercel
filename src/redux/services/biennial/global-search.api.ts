import { api } from '../api.config'

export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    biennialGlobalSearch: builder.query<any, { organizationName: string; locale: string; searchTerm?: string }>({
      query: (params) => {
        return {
          url: '/common/globalSearch',
          method: 'GET',
          headers: { hideSuccessToast: 'true' },
          params: params,
        }
      },
      providesTags: ['programme'],
    }),
  }),
})

export const { useBiennialGlobalSearchQuery, useLazyBiennialGlobalSearchQuery } = extendedApi

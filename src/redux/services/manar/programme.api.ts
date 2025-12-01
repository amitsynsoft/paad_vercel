import { api } from '../api.config'
import { PaginationApiResponse } from '@/types/manar'

export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProgrammeList: builder.query<PaginationApiResponse<any>, any>({
      query: (params) => {
        const { locale, location, organizationName = 'Manar', page = 1, pageSize = 100, ...rest } = params

        return {
          url: '/Programme/programlistpaged',
          method: 'GET',
          headers: { hideSuccessToast: 'true' },
          params: {
            locale,
            organizationName,
            page,
            pageSize,
            ...(location ? { location } : {}),
            ...rest,
          },
        }
      },
      providesTags: ['programme'],
    }),
  }),
})

export const { useGetProgrammeListQuery } = extendedApi

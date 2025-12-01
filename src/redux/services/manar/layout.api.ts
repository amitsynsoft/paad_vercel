import { api } from '../api.config'

export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHeader: builder.query<any, { locale: string; organizationName: string }>({
      query: ({ locale, organizationName }) => ({
        url: `/layout/header?locale=${locale}&organizationName=${organizationName}`,
        method: 'GET',
        headers: { hideSuccessToast: 'true' },
      }),
      providesTags: ['header'],
    }),

    getFooter: builder.query<any, { locale: string; organizationName: string }>({
      query: ({ locale, organizationName }) => ({
        url: `/layout/footer?locale=${locale}&organizationName=${organizationName}`,
        method: 'GET',
        headers: { hideSuccessToast: 'true' },
      }),
      providesTags: ['footer'],
    }),
  }),
})

export const { useGetFooterQuery, useGetHeaderQuery } = extendedApi

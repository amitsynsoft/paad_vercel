import { api } from '../api.config'

export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    exploreMapArtwork: builder.query<any, { locale: string; organizationName: string }>({
      query: ({ locale, organizationName }) => ({
        url: `/Map/MapList?locale=${locale}&organizationName=${organizationName}`,
        method: 'GET',
        headers: { hideSuccessToast: 'true' },
      }),
      providesTags: ['map'],
    }),
  }),
})

export const { useExploreMapArtworkQuery } = extendedApi

import { api } from './api.config'

export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // login: builder.mutation<{ access_token: string; refresh_token: string; role: string }, { email: string; password: string }>({
    //   query: (body) => ({
    //     url: '/v1/auth/login',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    // profile: builder.query<UserDTO, void>({
    //   query: () => ({
    //     url: '/v1/user/profile',
    //     method: 'GET',
    //     headers: { hideSuccessToast: 'true' },
    //   }),
    //   providesTags: ['profile'],
    // }),

    exploreMapArtwork: builder.query<any, void>({
      query: () => ({
        url: '/Map/MapList?locale=en&organizationName=Manar',
        method: 'GET',
        headers: { hideSuccessToast: 'true' },
      }),
      providesTags: ['map'],
    }),
  }),
})

export const { useExploreMapArtworkQuery } = extendedApi

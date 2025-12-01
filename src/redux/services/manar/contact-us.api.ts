import { api } from '../api.config'

export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getContactDetails: builder.query<any, { locale: string; organizationName: string }>({
      query: ({ locale, organizationName }) => ({
        url: `/Page/pages?locale=${locale}&slug=contact-us&organizationName=${organizationName}`,
        method: 'GET',
        headers: { hideSuccessToast: 'true' },
      }),
      providesTags: ['contact'],
    }),

    sendGeneralInquiry: builder.mutation<any, { formData: { fullName: string; email: string; message?: string; subject?: string; token: string }; locale: string; organizationName: string }>({
      query: ({ formData, locale, organizationName }) => ({
        url: `/Enquiry/contactenquiry?locale=${locale}&organizationName=${organizationName}`,
        method: 'POST',
        headers: { hideSuccessToast: 'false' },
        body: formData,
      }),
      invalidatesTags: ['contact'],
    }),

    sendPressInquery: builder.mutation<
      any,
      {
        formData: {
          fullName: string
          email: string
          contactNumber?: string
          position?: string
          cityOfResidence?: string
          publicationName?: string
          token: string
        }
        locale: string
        organizationName: string
      }
    >({
      query: ({ formData, locale, organizationName }) => ({
        url: `/press/pressenquiry?locale=${locale}&organizationName=${organizationName}`,
        method: 'POST',
        headers: { hideSuccessToast: 'false' },
        body: formData,
      }),
      invalidatesTags: ['contact'],
    }),
  }),
})

export const { useGetContactDetailsQuery, useSendGeneralInquiryMutation, useSendPressInqueryMutation } = extendedApi

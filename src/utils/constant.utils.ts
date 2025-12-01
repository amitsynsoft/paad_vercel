export const themeBProgressBarMap = {
  biennial: '#51d0ff',
  manar: '#a49ef7',
  'abu-dhabi': '#a49ef7',
}

export const languagesOptions = [
  { value: 'en', label: 'English' },
  { value: 'ar', label: 'Arabic' },
]

export const placeholderImage = '/images/manar/placeholder.svg'
export const placeholderImageLoading = '/images/manar/image-loading.svg'

export const placeholderImageBiennial = '/images/biennial/placeholder.svg'
export const placeholderImageLoadingBiennial = '/images/biennial/image-loading.svg'

export const ORG_CONFIG = {
  Manar: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL_MANAR!,
    orgName: process.env.NEXT_PUBLIC_ORG_NAME_MANAR!,
    key: process.env.NEXT_PUBLIC_SUBSCRIPTION_KEY_MANAR!,
  },
  Biennial: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL_BIENNIAL!,
    orgName: process.env.NEXT_PUBLIC_ORG_NAME_BIENNIAL!,
    key: process.env.NEXT_PUBLIC_SUBSCRIPTION_KEY_BIENNIAL!,
  },
  'Abu-Dhabi': {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL_ABU_DHABI!,
    orgName: process.env.NEXT_PUBLIC_ORG_NAME_ABU_DHABI!,
    key: process.env.NEXT_PUBLIC_SUBSCRIPTION_KEY_ABU_DHABI!,
  },
} as const

export type OrgKey = keyof typeof ORG_CONFIG

export const MANAR_GUIDEBOOK_URL = 'https://resources.dct.gov.ae/publicart/media/ixrjienm/manar-abu-dhabi-guidebook-2025-2026-new.pdf'
export const MANAR_MEDIA_RESOURCES_URL = `https://drive.google.com/drive/folders/1v9Y9A3B2H1cY2-GzSpLZDtu_Tj3kK0LB`

export const ORG_CONFIG = {
  Manar: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL_MANAR!,
    orgName: process.env.NEXT_PUBLIC_ORG_NAME_MANAR!,
    key: process.env.NEXT_PUBLIC_SUBSCRIPTION_KEY!,
  },
  Biennial: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL_BIENNIAL!,
    orgName: process.env.NEXT_PUBLIC_ORG_NAME_BIENNIAL!,
    key: process.env.NEXT_PUBLIC_SUBSCRIPTION_KEY!,
  },
  'Abu-Dhabi': {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL_ABU_DHABI!,
    orgName: process.env.NEXT_PUBLIC_ORG_NAME_ABU_DHABI!,
    key: process.env.NEXT_PUBLIC_SUBSCRIPTION_KEY!,
  },
} as const

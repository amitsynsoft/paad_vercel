// src/types/api.ts

export type LocaleParam = {
  locale: string
}

export type LocaleSlugParam = LocaleParam & {
  slug?: string
}

export type APIParams = LocaleParam &
  LocaleSlugParam & {
    filter?: string | undefined
    keywords?: string | undefined
    location?: string | undefined
    medium?: string | undefined
  }

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
    searchTerm?: string | undefined
  }

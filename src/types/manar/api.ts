// src/types/api.ts

export type LocaleParam = {
  locale: string
}

export type LocaleSlugParam = LocaleParam & {
  slug?: string
}

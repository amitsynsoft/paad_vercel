export const getImgClass = (mode: string) => {
  if (mode === 'light') {
    return `
        transition-all
        brightness-100 invert-0
        group-hover:brightness-0 group-hover:invert
      `
  } else {
    return `
        transition-all
        brightness-0 invert
        group-hover:brightness-0 group-hover:invert-0
      `
  }
}

export const getDirectionClass = (locale: string) => {
  return locale === 'ar' ? 'rotate-180' : ''
}

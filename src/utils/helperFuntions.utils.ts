export const createImageFullUrl = (path: string, domain?: string | null): string => {
  if (!path) {
    return ''
  }

  const finalDomain = domain || process.env.NEXT_PUBLIC_IMAGE_DOMAIN || ''
  try {
    return `${finalDomain}${path}`
  } catch (error) {
    console.error('Could not create a valid URL:', { path, domain, error })
    return path
  }
}

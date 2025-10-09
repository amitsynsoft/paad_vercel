export const paths = {
  landing: '/',
  manar: '/manar',
  biennial: '/biennial',

  // Manar paths
  manarHome: () => `${paths.manar}`,
  manarAbout: () => `${paths.manar}/about`,
  manarArtists: () => `${paths.manar}/artists`,
  manarArtistDetail: (id: string) => `${paths.manar}/artist-detail/${id}`,
  manarArtworks: () => `${paths.manar}/artworks`,
  manarArtworkDetail: (id: string) => `${paths.manar}/artwork-detail/${id}`,

  // Biennial paths
  biennialHome: () => `${paths.biennial}`,
  biennialAbout: () => `${paths.biennial}/about`,
}

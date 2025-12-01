export const paths = {
  landing: '/',
  manar: '/manar',
  biennial: '/biennial',

  // Manar paths
  manarHome: () => `${paths.manar}`,
  manarAbout: () => `${paths.manar}/about`,
  manarArtists: () => `${paths.manar}/artists`,
  manarArtistDetail: (id: string) => `${paths.manar}/artist-detail/${id}`,
  manarCurators: () => `${paths.manar}/curators`,
  manarCuratorDetail: (id: string) => `${paths.manar}/curator-detail/${id}`,
  manarArtworks: () => `${paths.manar}/artworks`,
  manarArtworkDetail: (id: string) => `${paths.manar}/artwork-detail/${id}`,
  manarProgramme: () => `${paths.manar}/programme`,
  manarProgrammeDetail: (id: string) => `${paths.manar}/programme-detail/${id}`,
  manarNews: () => `${paths.manar}/news`,
  manarNewsDetail: (id: string) => `${paths.manar}/news-detail/${id}`,

  // Biennial paths
  biennialHome: () => `${paths.biennial}`,
  biennialAbout: () => `${paths.biennial}/about`,
  biennialArtists: () => `${paths.biennial}/artists`,
  biennialArtistDetail: (id: string) => `${paths.biennial}/artists?artistDetail=${id}`,
  biennialArtworks: () => `${paths.biennial}/artworks`,
  biennialArtworkDetail: (id: string) => `${paths.biennial}/artworks?artworkDetail=${id}`,
  biennialPrograms: () => `${paths.biennial}/programs`,
  biennialProgramsDetail: (id: string) => `${paths.biennial}/programs?programDetail=${id}`,
}

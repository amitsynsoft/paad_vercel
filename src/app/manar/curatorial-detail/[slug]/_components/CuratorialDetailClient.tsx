'use client'

import React from 'react'

import { CuratorProfile } from '@/_components/manar/pages-components/curatorial-detail/curator-profile-section/CuratorProfile'

export default function CuratorialDetailClient({ data }: { data: any }) {
  return <CuratorProfile name={data?.name} about={data?.role} residence={data?.about} workPlace={data?.workPlace} imageUrl={data?.image?.url} description={data?.bio} />
}

import React from 'react'
import OurPartnersSection from '@/_components/manar/pages-components/our-partners/OurPartnersSection'

export default function OurPartnersClient({ data }: { data: any }) {
  return <OurPartnersSection title={data?.title} description={data?.description} presentingPartners={data?.presentingPartners} programmePartners={data?.programmePartners} />
}

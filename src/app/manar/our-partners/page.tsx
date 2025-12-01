import OurPartnersClient from './_components/OurPartnersClient'
import { getLocale } from 'next-intl/server'
import { getOurPartners } from '@/services/manar/our-partners/getOurPartners'

export default async function page() {
  const locale = await getLocale()
  const ourPartnersData = await getOurPartners({ locale })

  return <OurPartnersClient data={ourPartnersData} />
}

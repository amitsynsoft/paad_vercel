import { getLocale } from 'next-intl/server'

import HeaderClient from './HeaderClient/HeaderClient'
import { getHeaderManar } from '@/services/manar/layout/getLayout'

// TODO: correct the naming convention of this header file
export default async function HeaderServer() {
  const locale = await getLocale()
  const headerData = await getHeaderManar({ locale })

  return <HeaderClient headerData={headerData} />
}

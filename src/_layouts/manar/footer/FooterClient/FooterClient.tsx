'use client'

import Image from 'next/image'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import Navigation from './components/Navigation'
import SocialAndLegal from './components/SocialAndLegal'
import { createImageFullUrl } from '@/utils'
import { FooterDTO } from '@/dto/manar/Footer.dto'

// TODO: remove any
const FooterClient = ({ footerData }: { footerData: FooterDTO }) => {
  const { mode } = useThemeStore()

  return (
    <footer className="w-full bg-background">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Navigation */}
        <Navigation menuItems={footerData?.menuItems} partners={footerData?.partners} />

        {/* Middle Social + Legal */}
        <SocialAndLegal secondaryLinks={footerData?.secondaryLinks} socialLinks={footerData?.socialLinks} copyRight={footerData?.copyRight} />

        {/* Right Branding */}
        <div className="flex flex-col items-end justify-end text-right space-y-2">
          <Image src={mode === 'dark' ? createImageFullUrl(footerData?.footerLogo?.[0]?.dark?.src ?? '') : createImageFullUrl(footerData?.footerLogo?.[0]?.light?.src ?? '')} alt="Logo" width={260} height={260} />
        </div>
      </div>
    </footer>
  )
}

export default FooterClient

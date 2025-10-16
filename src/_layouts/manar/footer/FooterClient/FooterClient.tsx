'use client'

import Image from 'next/image'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import Navigation from './components/Navigation'
import SocialAndLegal from './components/SocialAndLegal'
import { FooterDTO } from '@/dto/manar/Footer.dto'

// TODO: remove any
const FooterClient = ({ footerData }: { footerData: FooterDTO }) => {
  const { mode } = useThemeStore()

  return (
    <footer className="w-full bg-background pt-50 md:pt-96 pb-8 px-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {/* Left Navigation */}
          <Navigation menuItems={footerData?.menuItems} partners={footerData?.partners} />

          {/* Middle Social + Legal */}
          <SocialAndLegal secondaryLinks={footerData?.secondaryLinks} socialLinks={footerData?.socialLinks} copyRight={footerData?.copyRight} />

          {/* Right Branding */}
          <div className="flex flex-col md:items-end md:justify-end space-y-2">
            {/* Desktop / Tablet Logo */}
            <Image src={mode === 'dark' ? (footerData?.footerLogo?.[0]?.dark?.src ?? '') : (footerData?.footerLogo?.[0]?.light?.src ?? '')} alt="Logo" width={360} height={330} className="object-contain hidden md:block" />

            {/* Mobile Logo */}
            <Image
              src={mode === 'dark' ? (footerData?.mobileLogo?.[0]?.dark?.src ?? footerData?.mobileLogo?.[0]?.dark?.src ?? '') : (footerData?.mobileLogo?.[0]?.light?.src ?? footerData?.mobileLogo?.[0]?.light?.src ?? '')}
              alt="Logo"
              width={350}
              height={110}
              className="object-contain md:hidden"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterClient

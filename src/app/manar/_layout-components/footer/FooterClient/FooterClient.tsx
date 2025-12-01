'use client'

import Navigation from './components/Navigation'
import SocialAndLegal from './components/SocialAndLegal'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { FooterDTO } from '@/dto/manar/Footer.dto'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'

const FooterClient = ({ footerData }: { footerData: FooterDTO }) => {
  const { mode } = useThemeStore()

  return (
    <footer className="w-full bg-background pt-16 md:pt-24 mt-25 md:mt-50 pb-8 px-6" key={mode}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,300px)_1fr_auto] gap-10 md:gap-8 items-end">
          {/* Left Navigation */}
          <div className="h-full">
            <Navigation menuItems={footerData?.menuItems} partners={footerData?.partners} />
          </div>

          {/* Middle Social + Legal */}
          <div className="h-full">
            <SocialAndLegal secondaryLinks={footerData?.secondaryLinks} socialLinks={footerData?.socialLinks} copyRight={footerData?.copyRight} />
          </div>

          {/* Right Branding */}
          <div className="flex flex-col md:items-end md:justify-end space-y-3">
            {/* Desktop / Tablet Logo */}
            <ImageGuard
              src={mode === 'dark' ? (footerData?.footerLogo?.[0]?.dark?.src ?? '') : (footerData?.footerLogo?.[0]?.light?.src ?? '')}
              alt="Logo"
              width={360}
              height={330}
              className="object-contain m-0 hidden md:flex"
            />

            {/* Mobile Logo */}
            <ImageGuard
              src={mode === 'dark' ? (footerData?.mobileLogo?.[0]?.dark?.src ?? footerData?.footerLogo?.[0]?.dark?.src ?? '') : (footerData?.mobileLogo?.[0]?.light?.src ?? footerData?.footerLogo?.[0]?.light?.src ?? '')}
              alt="Logo"
              width={1000}
              height={120}
              className="object-contain md:hidden"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterClient

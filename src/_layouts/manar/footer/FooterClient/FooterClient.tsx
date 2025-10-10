'use client'

import Image from 'next/image'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import Navigation from './components/Navigation'
import SocialAndLegal from './components/SocialAndLegal'
import { createImageFullUrl } from '@/utils'
import { FooterDTO } from '@/dto/manar/Footer.dto'
import Section from '@/_components/manar/_ui/section/Section'

// TODO: remove any
const FooterClient = ({ footerData }: { footerData: FooterDTO }) => {
  const { mode } = useThemeStore()

  return (
    <footer className="w-full bg-background">
      <Section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {/* Left Navigation */}
        <Navigation menuItems={footerData?.menuItems} partners={footerData?.partners} />

        {/* Middle Social + Legal */}
        <SocialAndLegal secondaryLinks={footerData?.secondaryLinks} socialLinks={footerData?.socialLinks} copyRight={footerData?.copyRight} />

        {/* Right Branding */}
        <div className="flex flex-col md:items-end md:justify-end space-y-2">
          <Image src={mode === 'dark' ? createImageFullUrl(footerData?.footerLogo?.[0]?.dark?.src ?? '') : createImageFullUrl(footerData?.footerLogo?.[0]?.light?.src ?? '')} alt="Logo" width={360} height={330} />
        </div>
      </Section>
    </footer>
  )
}

export default FooterClient

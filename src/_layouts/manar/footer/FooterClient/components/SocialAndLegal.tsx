import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { FooterDTO } from '@/dto/manar'
import { useLocale } from 'next-intl'

interface SocialAndLegalProps extends Pick<FooterDTO, 'secondaryLinks' | 'socialLinks' | 'copyRight'> {}
// TODO: remove hardcode social links
export default function SocialAndLegal({ secondaryLinks, socialLinks, copyRight }: SocialAndLegalProps) {
  const locale = useLocale()
  const { mode } = useThemeStore()

  return (
    <div className="flex flex-col items-start justify-between space-y-6">
      <div>
        {/* TODO: hardcoded */}
        <h4 className="text-base font-semibold text-foreground mb-2">{locale === 'ar' ? 'تابعنا على وسائل التواصل الاجتماعي' : 'Follow us on social media'}</h4>
        {/* Social Links */}
        <div className="flex items-center space-x-4 text-foreground">
          {[
            { key: 'instagram', imgLight: '/images/instagram-white.svg', imgDark: '/images/instagram-primary.svg' },
            { key: 'facebook', imgLight: '/images/facebook-white.svg', imgDark: '/images/facebook-primary.svg' },
            { key: 'twitter', imgLight: '/images/x-white.svg', imgDark: '/images/x-primary.svg' },
            { key: 'snapchat', imgLight: '/images/youtube-white.svg', imgDark: '/images/youtube-primary.svg' },
          ].map((social) => {
            const url = socialLinks?.[social.key] || '#'
            return (
              <Link key={social.key} href={url} target="_blank" rel="noopener noreferrer" className="relative w-8 h-8 rounded-full flex items-center justify-center bg-primary hover:!bg-primary">
                <Image src={mode === 'dark' ? social.imgDark : social.imgLight} alt={social.key} width={social.key === 'facebook' ? 10 : 18} height={18} className="object-contain max-w-[20px] mx-auto" />
              </Link>
            )
          })}
        </div>
      </div>
      <div>
        <div className="text-base font-semibold text-foreground space-x-2">
          {secondaryLinks?.map((item, index: number) => (
            <Link key={index} href={item?.url ?? '#'}>
              {item?.label || ''}
            </Link>
          ))}
        </div>

        <div className="text-base font-semibold text-foreground">{copyRight || ''}</div>
      </div>
    </div>
  )
}

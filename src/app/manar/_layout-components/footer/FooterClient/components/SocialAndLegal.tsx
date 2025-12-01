'use client'
import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { FooterDTO } from '@/dto/manar'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'

interface SocialAndLegalProps extends Pick<FooterDTO, 'secondaryLinks' | 'socialLinks' | 'copyRight'> {}

export default function SocialAndLegal({ secondaryLinks, socialLinks, copyRight }: SocialAndLegalProps) {
  const { mode } = useThemeStore()
  const t = useTranslations('Manar.Footer.socials')

  const socials = [
    { key: 'instagram', imgLight: '/images/manar/instagram-white.svg', imgDark: '/images/manar/instagram-primary.svg' },
    { key: 'facebook', imgLight: '/images/manar/facebook-white.svg', imgDark: '/images/manar/facebook-primary.svg' },
    { key: 'twitter', imgLight: '/images/manar/x-white.svg', imgDark: '/images/manar/x-primary.svg' },
    { key: 'youtube', imgLight: '/images/manar/youtube-white.svg', imgDark: '/images/manar/youtube-primary.svg' },
  ]

  return (
    <div className="flex flex-col items-start justify-between space-y-6 h-full">
      <div>
        <h2 className="text-base font-semibold text-foreground mb-2">{t('followUs')}</h2>

        {/* Social Links */}
        <div className="flex items-center space-x-4 text-foreground">
          {socials.map((social) => {
            const url = socialLinks?.[social.key] || '#'
            const imgDefault = mode === 'dark' ? social.imgDark : social.imgLight
            const imgHover = mode === 'dark' ? social.imgLight : social.imgDark

            return (
              <Link
                key={social.key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-8 h-8 rounded-full flex items-center justify-center bg-primary hover:bg-transparent transition-all duration-300"
              >
                {/* Default Image */}
                <ImageGuard
                  src={imgDefault}
                  alt={social.key}
                  width={social.key === 'facebook' ? 10 : 18}
                  height={18}
                  className="object-contain max-w-[20px] mx-auto transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />

                {/* Hover Image */}
                <ImageGuard
                  src={imgHover}
                  alt={`${social.key}-hover`}
                  width={social.key === 'facebook' ? 10 : 18}
                  height={18}
                  className="object-contain max-w-[20px] mx-auto absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </Link>
            )
          })}
        </div>
      </div>

      {/* Secondary links & copyright */}
      <div>
        <div className="text-base font-semibold text-foreground space-x-2 mb-2">
          {secondaryLinks?.map((item, index: number) => (
            <Link key={index} href={item?.url ?? '#'} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
              {item?.label || ''}
            </Link>
          ))}
        </div>

        <div className="text-base font-semibold text-foreground">{copyRight || ''}</div>
      </div>
    </div>
  )
}

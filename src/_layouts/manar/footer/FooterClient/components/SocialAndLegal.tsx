'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { FooterDTO } from '@/dto/manar'
import { useLocale } from 'next-intl'

interface SocialAndLegalProps extends Pick<FooterDTO, 'secondaryLinks' | 'socialLinks' | 'copyRight'> {}

export default function SocialAndLegal({ secondaryLinks, socialLinks, copyRight }: SocialAndLegalProps) {
  const locale = useLocale()
  const { mode } = useThemeStore()

  const socials = [
    { key: 'instagram', imgLight: '/images/instagram-white.svg', imgDark: '/images/instagram-primary.svg' },
    { key: 'facebook', imgLight: '/images/facebook-white.svg', imgDark: '/images/facebook-primary.svg' },
    { key: 'twitter', imgLight: '/images/x-white.svg', imgDark: '/images/x-primary.svg' },
    { key: 'youtube', imgLight: '/images/youtube-white.svg', imgDark: '/images/youtube-primary.svg' },
  ]

  return (
    <div className="flex flex-col items-start justify-between space-y-6">
      <div>
        <h4 className="text-base font-semibold text-foreground mb-2">{locale === 'ar' ? 'تابعنا على وسائل التواصل الاجتماعي' : 'Follow us on social media'}</h4>

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
                <Image
                  src={imgDefault}
                  alt={social.key}
                  width={social.key === 'facebook' ? 10 : 18}
                  height={18}
                  className="object-contain max-w-[20px] mx-auto transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />

                {/* Hover Image */}
                <Image
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

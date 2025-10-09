// src/config/fonts.ts
import localFont from 'next/font/local'

export const ABCDiatypeFont = localFont({
  src: [
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatype-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatype-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatype-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatype-BoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatype-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatype-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatype-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatype-RegularItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatypeArabic-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatypeArabic-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatypeArabic-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatypeArabic-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-abcdiatype',
})

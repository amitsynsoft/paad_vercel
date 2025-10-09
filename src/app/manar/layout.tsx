import React from 'react'
import HeaderServer from '@/_layouts/manar/header/HeaderServer'
import FooterServer from '@/_layouts/manar/footer/FooterServer'

export default async function ManarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-abcdiatype">
      <HeaderServer />
      <div className="min-h-screen">{children}</div>
      <FooterServer />
    </div>
  )
}

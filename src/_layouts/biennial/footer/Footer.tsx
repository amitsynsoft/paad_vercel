'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Input } from '@heroui/react'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer({ data }: { data: any }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError(data.labels.invalidEmail)
      return
    }
    setError('')
    setSuccess(data.labels.successfullySubmitted)
    // TODO: Call API for subscription
  }

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <Instagram size={20} />
      case 'facebook':
        return <Facebook size={20} />
      case 'x':
        return <Twitter size={20} />
      default:
        return null
    }
  }

  return (
    <footer
      className="relative text-black"
      style={{
        backgroundImage: `url(${data?.images?.landscape?.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Mailing List */}
        <div>
          <h2 className="text-lg font-semibold mb-4">{data?.title}</h2>
          <Input type="email" placeholder={data?.labels?.emailAddressPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} radius="sm" className="mb-3" />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          {success && <p className="text-green-600 text-sm mb-2">{success}</p>}
          <Button onClick={handleSubscribe} variant="bordered" color="primary" radius="sm">
            {data?.labels?.subscribe}
          </Button>
        </div>

        {/* Center: Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">{data?.labels?.quickLinks}</h2>
          <ul className="space-y-2">
            {data?.menuItems?.map((item: any) => (
              <li key={item.url}>
                <Link href={item.url} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Information / Markdown */}
        <div className="text-sm" dangerouslySetInnerHTML={{ __html: data?.markdown }} />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <p className="text-xs">{data?.labels?.copyrightText}</p>
        <div className="flex items-center gap-4">
          {data?.secondaryLinks?.map((link: any) => (
            <Link key={link.url} href={link.url} target="_blank" className="text-xs hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          {data?.socialLinks?.map((social: any) => (
            <Link key={social.platform} href={social.url} target="_blank" className="hover:text-foreground">
              {getIcon(social.platform)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

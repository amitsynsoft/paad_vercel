'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Input } from '@heroui/react'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import Container from '@/_components/biennial/_ui/container/Container.component'

export default function FooterClient({ data }: { data: any }) {
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
      className="relative h-[32rem]"
      style={{
        backgroundImage: `url(${data?.images?.landscape?.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <div className="py-12 lg:pt-24 grid grid-cols-1 md:grid-cols-3 gap-24">
          {/* Left: Mailing List */}
          <div className="flex flex-col gap-6">
            <h2 className="text-medium font-semibold">{data?.title}</h2>
            <Input type="email" className="text-xs placeholder:text-2xl" placeholder={data?.labels?.emailAddressPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} radius="sm" />

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            {success && <p className="text-green-600 text-sm mb-2">{success}</p>}

            <Button onPress={handleSubscribe} variant="ghost" color="primary" className="text-tiny bg-white p-4 max-w-32">
              {data?.labels?.subscribe}
            </Button>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col gap-6">
            <h2 className="text-medium font-semibold">{data?.labels?.quickLinks}</h2>
            <div className="flex flex-col gap-6">
              {data?.menuItems?.map((item: any) => (
                <Link href={item?.url} className="text-sm font-semibold" key={item?.label}>
                  {item?.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Information / Markdown */}
          <div className="text-small font-semibold" dangerouslySetInnerHTML={{ __html: data?.markdown }} />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-24 gap-6">
          <p className="text-small font-semibold">{data?.labels?.copyrightText}</p>

          <div>
            {data?.secondaryLinks?.map((link: any) => (
              <Link key={link?.url} href={link?.url} target="_blank" className="text-sm font-semibold hover:underline">
                {link?.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 flex-1 justify-end">
            {data?.socialLinks?.map((social: any) => (
              <Link key={social?.platform} href={social?.url} target="_blank" className="hover:text-foreground">
                {getIcon(social?.platform)}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

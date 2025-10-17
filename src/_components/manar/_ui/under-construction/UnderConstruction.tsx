'use client'

import { Button } from '@heroui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { paths } from '@/navigate/paths'

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 120 }}>
        <Image src="/images/underconstruction.jpg" alt="Under Construction" width={300} height={300} className="object-contain" />
      </motion.div>

      <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-base text-gray-600">
        We are currently working hard to bring you something awesome.
        <br /> Check back soon!
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-6">
        <Link href={paths.manarHome()}>
          <Button color="primary">Go Back Home</Button>
        </Link>
      </motion.div>
    </div>
  )
}

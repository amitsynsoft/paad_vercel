'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button, Card, CardBody } from '@heroui/react'

import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { NoRecordFoundProps } from './NoRecordFound.type'
import { placeholderImageLoading } from '@/utils'

const NoRecordFound: React.FC<NoRecordFoundProps> = ({
  title = 'No Records Found',
  message = 'We couldn’t find any data to display right now. Please try again later or adjust your filters.',
  actionLabel,
  onAction,
  imageSrc = '/images/manar/no-data.svg',
  height = 'h-60',
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="bg-transparent shadow-none border-none">
          <CardBody className="flex flex-col items-center justify-center">
            <div className={`relative w-60 mb-5 ${height}`}>
              <ImageGuard src={imageSrc} alt="No Record Found" fill className="object-contain opacity-90" placeholder="blur" blurDataURL={placeholderImageLoading} />
            </div>
            <h2 className="text-lg text-foreground mb-2 text-center">{title}</h2>
            <p className="text-base max-w-md mb-6 text-center">{message}</p>

            {actionLabel && onAction && (
              <Button color="primary" variant="solid" size="md" onPress={onAction} className="rounded-full min-w-[150px]">
                {actionLabel}
              </Button>
            )}
          </CardBody>
        </Card>
      </motion.div>
    </div>
  )
}

export default NoRecordFound

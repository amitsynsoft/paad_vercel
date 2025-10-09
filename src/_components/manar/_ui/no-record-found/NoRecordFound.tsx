'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button, Card, CardBody } from '@heroui/react'

import ImageGuard from '../image-guard/ImageGuard.component'
import { NoRecordFoundProps } from './NoRecordFound.type'

const NoRecordFound: React.FC<NoRecordFoundProps> = ({
  title = 'No Records Found',
  message = 'We couldn’t find any data to display right now. Please try again later or adjust your filters.',
  actionLabel,
  onAction,
  imageSrc = '/images/no-data.svg',
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="bg-transparent shadow-none border-none">
          <CardBody className="flex flex-col items-center justify-center">
            <div className="relative w-40 h-40 mb-6">
              <ImageGuard src={imageSrc} alt="No Record Found" fill className="object-contain opacity-90" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">{title}</h2>
            <p className="text-sm text-default-500 max-w-md mb-6">{message}</p>

            {actionLabel && onAction && (
              <Button color="primary" variant="solid" size="md" onPress={onAction} className="rounded-full font-medium min-w-[150px]">
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

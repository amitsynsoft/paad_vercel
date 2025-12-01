'use client'
import React from 'react'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/navigation'
import { ModalContent, ModalHeader, ModalBody } from '@heroui/react'

import Modal from '@/_components/biennial/_ui/model/Model.component'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'

export default function ProgramDetailModel({ programDetailData, open, categoryLabel }: { programDetailData: any; open: boolean; categoryLabel: any }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(open)

  const handleOpenChange = (open: boolean) => {
    setIsOpen(!open)
    router.push('/biennial/programs', { scroll: false })
  }

  console.log(programDetailData, categoryLabel)
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={handleOpenChange} size="5xl" placement="bottom-end" scrollBehavior="outside" classNames="close-button" className="biennial-light" portalContainer={document.body}>
        <ModalContent className="top-10 p-8 pt-10 lg:pt-8 max-w-7xl rounded-none !mt-[auto] !mx-0 !mb-0">
          <ModalHeader className="flex-col">
            <div className="flex flex-col gap-4 justify-center">
              <p className="text-2xl text-default-400">{categoryLabel}</p>
              <h3 className="text-large !text-foreground ">{programDetailData?.title}</h3>
              <p className="text-small font-medium">
                <span className="inline-block">{programDetailData?.dateString}</span> | <span className="inline-block">{programDetailData?.timeString}</span>
              </p>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-12 ">
              <div className="relative h-[300px] md:h-[500px] w-full flex-shrink-0">
                <ImageGuard src={programDetailData?.images?.card?.src} alt={programDetailData?.name || 'image'} fill className="object-cover" />
              </div>

              <div className="relative w-full">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  skipHtml={false}
                  components={{
                    strong: ({ node, ...props }) => <strong {...props} className="mb-4 text-small font-normal"></strong>,
                    p: ({ node, ...props }) => <p {...props} className="mb-8 text-small" />,
                    a: ({ node, ...props }) => <a {...props} className="mb-4 text-small text-primary" />,
                  }}
                >
                  {programDetailData?.markdown || ''}
                </ReactMarkdown>
              </div>
            </div>
            {/* {programDetailData.shortDescription && <p>{programDetailData.shortDescription}</p>} */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

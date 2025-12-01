'use client'
import React from 'react'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/navigation'
import { ModalContent, ModalHeader, ModalBody } from '@heroui/react'

import Modal from '@/_components/biennial/_ui/model/Model.component'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'

export default function ArtistDetailModel({ artistDetailData, open, categoryLabel }: { artistDetailData: any; open: boolean; categoryLabel: any }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(open)

  const handleOpenChange = (open: boolean) => {
    setIsOpen(!open)
    router.push('/biennial/artists', { scroll: false })
  }

  console.log(artistDetailData, categoryLabel)
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={handleOpenChange} size="5xl" placement="bottom-end" scrollBehavior="outside" classNames="close-button" className="biennial-light" portalContainer={document.body}>
        <ModalContent className="top-10 p-8 pt-10 lg:pt-8 max-w-7xl rounded-none !mt-[auto] !mx-0 !mb-0">
          <ModalHeader className="flex-col">
            <div className="flex flex-col gap-4 justify-center">
              <p className="text-2xl text-default-400 ">{categoryLabel}</p>
              <h3 className="text-large !text-foreground ">{artistDetailData?.name}</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col md:flex-row gap-12 bg-primary/50 p-5 md:p-8 lg:p-10 ">
              <div className="relative h-[300px] md:h-[400px] w-full md:w-2/5 flex-shrink-0">
                <div className="overlay-img-artist aspect-square flex justify-center items-center">
                  <div className="relative h-[85%] w-[85%] rounded-full overflow-hidden ">
                    <ImageGuard src={artistDetailData?.images?.card?.src} alt={artistDetailData?.name} width={1080} height={1080} />
                  </div>
                </div>
              </div>

              <div className="relative w-full  md:w-3/5 flex-grow">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  skipHtml={false}
                  components={{
                    p: ({ node, ...props }) => <p {...props} className="mb-4 text-small font-medium" />,
                  }}
                >
                  {artistDetailData?.about}
                </ReactMarkdown>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

import React from 'react'
import * as ModalConfig from '@heroui/react'
import { Modal as BaseModal } from '@heroui/react'

const StyledModal = ModalConfig.extendVariants(BaseModal, {
  variants: {
    classNames: {
      'close-button': {
        closeButton: 'cursor-pointer self-end sticky top-5 inline-flex justify-center items-center text-white text-2xl bg-black w-8 h-8 p-1 ltr:-mr-5 rtl:-ml-5 z-20 hover:bg-primary-900 transition-colors',
      },
    },
    placement: {
      'bottom-end': {
        base: '!mt-auto',
        wrapper: 'justify-end',
      },
    },
  },
})

const Modal = (props: React.ComponentProps<typeof StyledModal>) => {
  const defaultMotionProps = {
    variants: {
      enter: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
      exit: { y: 30, opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
    },
  }

  return <StyledModal {...props} motionProps={{ ...defaultMotionProps, ...props.motionProps }} />
}

export default Modal

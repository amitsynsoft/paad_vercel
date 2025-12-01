'use client'

import React from 'react'
import { Textarea as HeroTextarea } from '@heroui/react'

export type TextareaProps = React.ComponentProps<typeof HeroTextarea> & {
  label?: string
  required?: boolean
  labelClassName?: string
  containerClassName?: string
}

export function Textarea({ label, required, labelClassName, containerClassName, classNames, variant = 'bordered', minRows = 3, ...props }: TextareaProps) {
  return (
    <div className={`flex flex-col ${containerClassName ?? ''}`}>
      {label && (
        <label htmlFor={(props as any).id} className={`text-primary text-base font-semibold mb-2 md:!mb-5 ${labelClassName ?? ''}`}>
          {label}
        </label>
      )}

      <HeroTextarea
        variant={variant}
        minRows={minRows}
        classNames={{
          inputWrapper: `
            border-primary
            focus-within:border-primary
            hover:border-primary
            !bg-transparent
            !text-primary
            !hover:bg-transparent
            !focus:bg-transparent
            transition-none
            data-[hover=true]:border-primary
            data-[focus=true]:border-primary
            rounded-[25px] 
            min-h-100
            md:!min-h-78
          `,
          input: `
            resize-none
            overflow-y-auto
            !text-primary
            !text-base
            !font-[600]
            !placeholder:text-gray-400
            !focus:outline-none
          `,
          ...(classNames || {}),
        }}
        style={{
          ['--nextui-border-hover' as any]: 'var(--nextui-colors-primary)',
          ['--nextui-border-focused' as any]: 'var(--nextui-colors-primary)',
          ['--nextui-input-hover-bg' as any]: 'transparent',
          ['--nextui-input-focus-bg' as any]: 'transparent',
        }}
        {...props}
      />
    </div>
  )
}

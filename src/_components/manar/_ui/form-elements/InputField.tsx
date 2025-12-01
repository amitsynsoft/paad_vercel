'use client'

import React from 'react'
import { Input } from '@heroui/react'

export type InputFieldProps = React.ComponentProps<typeof Input> & {
  label?: string
  required?: boolean
  labelClassName?: string
  containerClassName?: string
  inputHeightClassName?: string
}

export function InputField({ label, required, labelClassName, containerClassName, inputHeightClassName = 'h-[48px]', classNames, variant = 'bordered', radius = 'full', ...props }: InputFieldProps) {
  return (
    <div className={'flex flex-col ' + (containerClassName ?? '')}>
      {label ? (
        <label htmlFor={(props as any).id} className={'!text-primary !text-base !font-bold !mb-[10px] md:!mb-5 ' + (labelClassName ?? '')}>
          {label}
        </label>
      ) : null}
      <Input
        variant={variant}
        radius={radius}
        classNames={{
          inputWrapper: `
            ${inputHeightClassName}
            border-primary
            focus-within:border-primary
            hover:border-primary
            !text-primary
            !bg-transparent
            !hover:bg-transparent
            !focus:bg-transparent
            transition-none
            data-[hover=true]:border-primary
            data-[focus=true]:border-primary
          `,
          input: `
            !text-primary 
            !text-base 
            !font-[600] 
            !placeholder:text-gray-400 
            !focus:outline-none 
            !focus:border-primary
          `,
          errorMessage: `
            md:!text-[15px] 
            !text-danger
            !mt-1
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

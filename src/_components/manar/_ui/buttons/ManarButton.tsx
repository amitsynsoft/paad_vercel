// MyButton.tsx
import { extendVariants, Button } from '@heroui/react'

export const ManarButton = extendVariants(Button, {
  variants: {
    color: {
      primaryOutline: 'text-[#1d136a] bg-white rounded-full border-[2px] border-[#1d136a] font-semibold',
      primary: 'text-white bg-[#1d136a] rounded-full font-semibold',
    },
    isDisabled: {
      true: 'bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed',
    },
    size: {
      xs: 'px-2 min-w-12 h-6 text-small gap-1',
      md: 'px-4 min-w-20 h-10 text-medium font-semibold gap-2',
      xl: 'px-8 min-w-28 h-14 text-large font-semibold gap-4',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
  compoundVariants: [
    {
      isDisabled: true,
      color: 'primaryOutline',
      variant: 'bordered',
      class: 'bg-[#1d136a]/80 opacity-100 border-[#1d136a]/80',
    },
    {
      isDisabled: true,
      color: 'primary',
      variant: 'solid',
      class: 'bg-[#1d136a]/80 opacity-100 border-[#1d136a]/80',
    },
  ],
})

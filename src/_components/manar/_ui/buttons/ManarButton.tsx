// MyButton.tsx
import { extendVariants, Button } from '@heroui/react'

export const ManarButton = extendVariants(Button, {
  variants: {
    color: {
      primaryOutline:
        'text-[#1d136a] text-base bg-white rounded-full border-[2px] border-[#1d136a] font-semibold hover:bg-[#1d136a] hover:text-white hover:border-[#1d136a] !opacity-100 transition-all duration-300 ease-in-out',
      primary: 'text-white text-base bg-[#1d136a] rounded-full font-semibold',
      primaryOutlineHover:
        'text-[#1d136a] text-base bg-white rounded-full border-[2px] border-[#1d136a] font-semibold hover:bg-[#1d136a] hover:text-white hover:border-[#ffffff] !opacity-100 transition-all duration-300 ease-in-out',
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
    },
    {
      isDisabled: true,
      color: 'primaryOutlineHover',
    },
    {
      isDisabled: true,
      color: 'primary',
    },
  ],
})

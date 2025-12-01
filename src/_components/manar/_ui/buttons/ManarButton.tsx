// MyButton.tsx
import { extendVariants, Button } from '@heroui/react'

export const ManarButton = extendVariants(Button, {
  variants: {
    color: {
      primary: 'rounded-full dark:bg-background dark:text-white',
      primaryMapButton: 'bg-primary text-white rounded-full dark:bg-background dark:text-white border-[2px] border-primary active:text-white dark:border-background ',
      primaryOutline: `
      text-base 
      border-[2px] 
      rounded-full 
      font-semibold 
      !opacity-100 
      transition-all 
      duration-300 
      ease-in-out
      bg-white 
      text-primary 
      border-primary 
      hover:bg-primary 
      hover:text-white 
      hover:border-primary 
      dark:bg-white 
      dark:text-primary-foreground 
      dark:border-primary-foreground 
      dark:hover:bg-background
      dark:hover:text-primary 
      dark:hover:border-primary-foreground
      `,
      primaryOutlineHover: `
      rounded-full
      text-base
      bg-transparent
       border-[2px] 
       border-primary 
       hover:bg-primary 
       hover:text-white 
       hover:border-primary 
       !opacity-100 
       transition-all 
       duration-300 
       ease-in-out
       dark:hover:bg-white
       dark:hover:text-primary-foreground
       dark:hover:border-primary
       `,
      directionOutlineHover: `
      rounded-full
      text-base
      bg-transparent
      border-[3px] 
      border-white 
      hover:bg-white 
      hover:text-primary 
      hover:border-white 
      !opacity-100 
      transition-all 
      duration-300 
      ease-in-out
      dark:hover:bg-white
      dark:hover:text-primary-foreground
      dark:hover:border-primary
       `,
      primaryFilled: `border-2 border-primary bg-primary text-white rounded-full dark:bg-primary dark:text-primary-foreground`,
      primaryFilledOutLine: `border-2 border-primary rounded-full`,

    },
    isDisabled: {
      true: 'bg-[#eaeaea] text-black opacity-50 cursor-not-allowed',
    },
    size: {
      xs: 'px-2 min-w-12 h-6 text-small gap-1',
      sm: 'px-4 min-w-16 h-8 text-small gap-1 border-2 border-primary font-semibold ',
      md: 'px-4 min-w-20 h-10 text-base font-semibold gap-2',
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
      color: 'primaryOutlineHover',
      variant: 'bordered',
    },
    {
      isDisabled: true,
      color: 'primaryOutline',
    },
    {
      isDisabled: true,
      color: 'directionOutlineHover',
      variant: 'bordered',
    },
    {
      isDisabled: true,
      color: 'primaryMapButton',
    },
  ],
})

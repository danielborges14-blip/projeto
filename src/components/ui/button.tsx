import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xl font-semibold transition-colors transition-transform duration-300 ease-[cubic-bezier(0.16,0.84,0.24,1)] disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200',
        hero:
          'bg-emerald-600 text-white shadow-[0_10px_40px_-16px_rgba(6,95,70,0.16)] hover:bg-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-400/60',
        outline:
          'border border-zinc-300 bg-white/70 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:bg-zinc-800',
      },
      size: {
        default: 'h-12 px-6',
        lg: 'h-14 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type ButtonProps = (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
) &
  VariantProps<typeof buttonVariants> & { href?: string }

function Button({ className, variant, size, href, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }))

  if (typeof href !== 'undefined') {
    return <a className={classes} href={href} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
  }

  return <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
}

export { Button }

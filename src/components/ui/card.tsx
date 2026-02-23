import * as React from 'react'

import { cn } from '../../lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'min-w-0 overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/70 p-4 backdrop-blur-xl sm:p-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return <h3 className={cn('text-lg font-semibold tracking-tight', className)} {...props} />
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('mt-4 space-y-3', className)} {...props} />
}

export { Card, CardContent, CardTitle }

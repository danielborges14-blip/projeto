import { BadgeCheck, Clapperboard } from 'lucide-react'
import * as React from 'react'

import { Card, CardContent, CardTitle } from '../ui/card'

type AccessCardProps = React.HTMLAttributes<HTMLDivElement> & {
  resources: string[]
}

export function AccessCard({ resources, className, ...props }: AccessCardProps) {
  return (
    <Card data-reveal className={`reveal-up ${className ?? ''}`} {...props}>
      <CardTitle className="flex items-center gap-2 text-xl font-semibold sm:text-xl">
        <Clapperboard className="size-5 text-sky-300" />
        O que você terá acesso
      </CardTitle>
      <CardContent>
        <ul className="grid grid-cols-2 gap-2 space-y-2 text-md text-zinc-200 sm:text-base">
          {resources.map((item) => (
            <li key={item} data-reveal className="reveal-up flex items-center gap-2">
              <BadgeCheck className="size-4 text-sky-300" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default AccessCard

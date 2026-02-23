import { Smartphone, Tv } from 'lucide-react'
import * as React from 'react'

import { Card, CardContent, CardTitle } from '../ui/card'

type DevicesCardProps = React.HTMLAttributes<HTMLDivElement> & {
  devices: string[]
}

export function DevicesCard({ devices, className, ...props }: DevicesCardProps) {
  return (
    <Card data-reveal className={` reveal-up border-white/15 bg-white/8 text-white ${className ?? ''}`} {...props}>
      <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
        <Tv className="size-5 text-sky-300" />
        Compatível com
      </CardTitle>
      <CardContent>
        <ul className="grid grid-cols-2 gap-2 text-sm text-zinc-200 w-full sm:text-base">
          {devices.map((device) => (
            <li key={device} data-reveal className="device-pill reveal-up w-full">
              <Smartphone className="size-2 text-sky-300" />
              {device}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default DevicesCard

import { ArrowRight } from 'lucide-react'
import * as React from 'react'
import buildWhatsappLink from '../../lib/whatsapp'
import { Button } from '../ui/button'
import { Card, CardContent, CardTitle } from '../ui/card'

type PlanCardProps = React.HTMLAttributes<HTMLDivElement> & {
  whatsappLink?: string
  price?: string
}

export function PlanCard({ price = 'R$ 29,90', className, ...props }: PlanCardProps) {
  const link = buildWhatsappLink(undefined, price, 'buy')
  return (
    <Card data-reveal className={`reveal-up border-sky-300/30 bg-sky-500/10 text-white ${className ?? ''}`} {...props}>
      <CardTitle className="text-lg sm:text-xl">💰 Plano Disponível</CardTitle>
      <CardContent className="space-y-4">
        <p className="text-3xl font-semibold text-sky-200 sm:text-2xl">🔥 Plano Mensal: {price}</p>
        <p className="text-md text-zinc-200 sm:text-base">Sem fidelidade. Sem burocracia. Sem necessidade de cadastro.</p>
        <Button href={link} target="_blank" rel="noreferrer" variant="hero" size="lg" className="w-full">
          Quero meu acesso agora
          <ArrowRight className="size-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

export default PlanCard

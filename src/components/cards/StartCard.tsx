import { ArrowRight } from 'lucide-react'
import * as React from 'react'
import buildWhatsappLink from '../../lib/whatsapp'
import { Button } from '../ui/button'
import { Card, CardContent, CardTitle } from '../ui/card'

type StartCardProps = React.HTMLAttributes<HTMLDivElement> & {
  whatsappLink?: string
}

export function StartCard({ whatsappLink, className, ...props }: StartCardProps) {
  const link = whatsappLink ?? buildWhatsappLink(undefined, undefined, 'trial')
  return (
    <Card data-reveal className={`reveal-up border-white/15 bg-white/8 text-white ${className ?? ''}`} {...props}>
      <CardTitle className="text-lg sm:text-xl">🚀 Comece Agora</CardTitle>
      <CardContent>
        <p className="text-sm text-zinc-200 sm:text-base">
          Não perca tempo. Clique no botão abaixo e fale diretamente com nosso atendimento.
        </p>
        <Button href={link} target="_blank" rel="noreferrer" variant="hero" size="lg" className="w-full">
          Solicite seu teste no WhatsApp
          <ArrowRight className="size-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

export default StartCard

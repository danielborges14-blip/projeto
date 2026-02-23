export type WhatsappMessageType = 'trial' | 'buy' | 'contact'

export function buildWhatsappLink(number?: string, price?: string, type: WhatsappMessageType = 'trial') {
  const whatsappNumber = number ?? (import.meta.env.VITE_WHATSAPP_NUMBER as string) ?? ''
  const priceEnv = price ?? (import.meta.env.VITE_PRICE as string) ?? 'R$ 30,00'
  let message = ''

  switch (type) {
    case 'buy':
      message = `Olá, quero contratar o plano mensal no valor de ${priceEnv}.`
      break
    case 'contact':
      message = `Olá, gostaria de mais informações sobre o plano de ${priceEnv}.`
      break
    case 'trial':
    default:
      message = `Olá, quero solicitar meu teste no acesso mensal de ${priceEnv}.`
      break
  }

  if (whatsappNumber && whatsappNumber.length > 0) {
    const clean = whatsappNumber.replace(/[^0-9]/g, '')
    return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`
  }
  return `https://wa.me/?text=${encodeURIComponent(message)}`
}

export default buildWhatsappLink

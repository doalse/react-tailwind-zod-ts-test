type ClassValue = string | number | null | undefined | false

export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ')
}

export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  const areaCode = digits.slice(0, 3)
  const prefix = digits.slice(3, 6)
  const line = digits.slice(6, 10)

  if (digits.length > 6) return `(${areaCode}) ${prefix}-${line}`
  if (digits.length > 3) return `(${areaCode}) ${prefix}`
  if (digits.length > 0) return `(${areaCode}`
  return ''
}

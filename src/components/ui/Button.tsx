import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'white'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-blue-500 text-white hover:bg-blue-700',
  secondary: 'bg-violet-500 text-white hover:bg-violet-900',
  white: 'bg-gray-200 text-ink-900 hover:shadow-xl hover:bg-white',
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'btn',
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  )
}

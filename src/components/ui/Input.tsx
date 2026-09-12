import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export const inputStyles =
  'w-full px-4 py-2 border bg-gray-300 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-white'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...props }: InputProps) {
  return <input className={cn(inputStyles, className)} {...props} />
}

import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { inputStyles } from '@/components/ui/Input'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={cn(inputStyles, className)} {...props} />
}

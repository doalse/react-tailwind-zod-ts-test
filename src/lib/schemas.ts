import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.email('Enter a valid email'),
  phone: z
    .string()
    .trim()
    .min(1, 'Phone number is required')
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Enter a valid phone number'),
  message: z.string().trim().min(1, 'Please tell us how we can help'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

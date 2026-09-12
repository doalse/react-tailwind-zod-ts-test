import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { services } from '@/data/content'
import { GradientBackground } from '@/components/three/GradientBackground'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from "@/components/ui/Button"
import { contactFormSchema, type ContactFormErrors, type ContactFormValues } from '@/lib/schemas'
import { formatPhoneNumber } from '@/lib/utils'

const initialValues: ContactFormValues = { name: '', email: '', phone: '', message: '' }

export function Services() {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field: keyof ContactFormValues) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }))
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const result = contactFormSchema.safeParse(values)

    if (!result.success) {
      const fieldErrors: ContactFormErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues
        if (!fieldErrors[field]) fieldErrors[field] = issue.message
      }
      setErrors(fieldErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <section id="community" className="relative overflow-hidden border-y border-ink-300 py-16">
      <GradientBackground className="absolute inset-0 z-0 opacity-30" />
      <Container className='relative z-10 text-center'>
        <h2 className='text-center text-4xl md:text-6xl text-indigo-900 font-bold mb-10 leading-normal'>{services.title}</h2>
        <p className='text-center font-bold subtitle inline-block text-2xl mb-20'>{services.subTitle}</p>
        <div className="flex flex-col md:flex-row gap-10">
          <div className='w-full md:w-1/2 flex flex-col'>
            <img src={services.image_url} alt="image" className='mb-10' />
            <p className='font-bold font-black text-2xl'>{services.text}</p>
          </div>
          <div className='w-full md:w-1/2'>
            <form onSubmit={handleSubmit} noValidate className="bg-violet-500 flex flex-col px-7 py-12 rounded-4xl">
              <span className='text-center text-white font-bold text-4xl uppercase'>Contact Us</span>
              <span className='text-center text-white text-2xl mb-10'>Available 24 Hours, 7 Days a Week</span>

              <Input
                type="text"
                placeholder='Name'
                value={values.name}
                onChange={handleChange('name')}
                className={errors.name ? 'mb-1' : 'mb-5'}
              />
              {errors.name && <p className='text-left text-red-200 text-sm mb-4'>{errors.name}</p>}

              <Input
                type="email"
                placeholder='Email'
                value={values.email}
                onChange={handleChange('email')}
                className={errors.email ? 'mb-1' : 'mb-5'}
              />
              {errors.email && <p className='text-left text-red-200 text-sm mb-4'>{errors.email}</p>}

              <Input
                type="tel"
                placeholder='(555) 555-5555'
                value={values.phone}
                onChange={(e) => setValues((prev) => ({ ...prev, phone: formatPhoneNumber(e.target.value) }))}
                className={errors.phone ? 'mb-1' : 'mb-5'}
              />
              {errors.phone && <p className='text-left text-red-200 text-sm mb-4'>{errors.phone}</p>}

              <Textarea
                rows={6}
                cols={40}
                placeholder='How we can help?'
                value={values.message}
                onChange={handleChange('message')}
                className={errors.message ? 'mb-1 resize-none' : 'mb-5 resize-none'}
              />
              {errors.message && <p className='text-left text-red-200 text-sm mb-4'>{errors.message}</p>}

              <Button type="submit" variant="white" className='w-1/2 flex m-auto h-15'>Send massage</Button>

              {submitted && (
                <p className='text-center text-white font-bold mt-5'>Thanks! We'll be in touch soon.</p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

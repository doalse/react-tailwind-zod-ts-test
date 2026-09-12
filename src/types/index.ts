export interface NavLink {
  label: string
  href: string
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
}

export interface Services {
  title: string
  subTitle: string
  text: string
  image_url?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Services {
  title: string
  subTitle: string
  text: string
  image_url?: string
}

export interface Quote {
  text: string
  button_text: string
}

export interface ResServ {
  title: string
  subHeader: string
  cards: {title: string, logo_url: string, btn_text: string}[]
  button_text: string
}

export type ReviewSource = 'facebook' | 'google' | 'bbb'

export interface Review {
  author: string
  rating: number
  date: string
  text: string
  source: ReviewSource
}

export interface Reviews {
  label: string
  title: string
  write_review_text: string
  items: Review[]
}

export interface ProfessionalsTab {
  label: string
  title: string
  text: string
  image_url: string
}

export interface Professionals {
  title: string
  tabs: ProfessionalsTab[]
}

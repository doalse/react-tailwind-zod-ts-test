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
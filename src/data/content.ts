import type { NavLink } from '@/types'
import type { Services } from "@/types"
import type { Quote } from "@/types"
import type { ResServ } from "@/types"
import services_image from "@/assets/services.png"
import card_logo_1 from "@/assets/card-logo-1.png"
import card_logo_2 from "@/assets/card-logo-2.png"
import card_logo_3 from "@/assets/card-logo-3.png"
import card_logo_4 from "@/assets/card-logo-4.png"

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about_us' },
  { label: 'How it works', href: '#how_it_works' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];


export const services: Services = {
  title: '24/7 Charlotte Water Damage, Fire Damage and Mold Remediation Services',
  subTitle: 'Restoring Your Home and Life Back to its pre-disaster state.',
  text: 'There are many places in your Aurora home where water damage can take place, from your basement to the attic. Water damage can occur from frozen pipes, frozen sprinkler lines, rusted or oxidized pipes, toilet overflow, toilet leaks, the water heater, refrigerator, dishwasher overflow or washing machine, hardwood floor water damage, broken pipe water damage.',
  image_url: services_image
}

export const fast_quote_data: Quote = {
  text: "DO YOU NEED RESTORATION SERVICES?",
  button_text: "GET A FAST QUOTE"
}

export const restoration_services: ResServ = {
  title: 'Learn About Our Restoration Services',
  subHeader: 'Sub Header Text Here',
  cards: [
    {title: 'Water Damage Restoration', logo_url: card_logo_1, btn_text: 'View Details'},
    {title: 'Fire Damage Restoration', logo_url: card_logo_2, btn_text: 'View Details'},
    {title: 'Junk Removal', logo_url: card_logo_3, btn_text: 'View Details'},
    {title: 'Mold Remediation', logo_url: card_logo_4, btn_text: 'View Details'},
  ],
  button_text: 'More Services'
}

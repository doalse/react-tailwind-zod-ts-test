import type { NavLink } from '@/types'
import type { Services } from "@/types"
import services_image from "@/assets/services.png"

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

export const fast_quote_data = {
  text: "DO YOU NEED RESTORATION SERVICES?",
  button_text: "GET A FAST QUOTE"
}

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

// export const features: Feature[] = [
//   {
//     title: 'Built for teams',
//     description: 'Invite your community and collaborate in real time, from anywhere.',
//     icon: 'users',
//   },
//   {
//     title: 'Fast by default',
//     description: 'Every interaction is optimized so your members never wait.',
//     icon: 'zap',
//   },
//   {
//     title: 'Secure & private',
//     description: 'Your data stays yours, protected end to end.',
//     icon: 'shield',
//   },
// ]

export const services: Services = {
  title: '24/7 Charlotte Water Damage, Fire Damage and Mold Remediation Services',
  subTitle: 'Restoring Your Home and Life Back to its pre-disaster state.',
  text: 'There are many places in your Aurora home where water damage can take place, from your basement to the attic. Water damage can occur from frozen pipes, frozen sprinkler lines, rusted or oxidized pipes, toilet overflow, toilet leaks, the water heater, refrigerator, dishwasher overflow or washing machine, hardwood floor water damage, broken pipe water damage.',
  image_url: services_image
}

// export const testimonials: Testimonial[] = [
//   {
//     quote: 'This platform completely changed how our community stays connected.',
//     author: 'Alex Morgan',
//     role: 'Community Lead',
//     avatar: '/avatars/alex.jpg',
//   },
//   {
//     quote: 'Setup took minutes and our members were active from day one.',
//     author: 'Jamie Lee',
//     role: 'Founder',
//     avatar: '/avatars/jamie.jpg',
//   },
// ]

// export const pricingPlans: PricingPlan[] = [
//   {
//     name: 'Starter',
//     price: '$0',
//     period: '/mo',
//     description: 'For small communities just getting started.',
//     features: ['Up to 100 members', 'Basic analytics', 'Community support'],
//   },
//   {
//     name: 'Pro',
//     price: '$29',
//     period: '/mo',
//     description: 'For growing communities that need more.',
//     features: ['Unlimited members', 'Advanced analytics', 'Priority support', 'Custom branding'],
//     highlighted: true,
//   },
// ]

import type { NavLink } from '@/types'
import type { Services } from "@/types"
import type { Quote } from "@/types"
import type { ResServ } from "@/types"
import type { Reviews } from "@/types"
import type { Professionals } from "@/types"
import type { Process } from "@/types"
import type { Faq } from "@/types"
import type { Experience } from "@/types"
import type { FooterData } from "@/types"
import services_image from "@/assets/services.png"
import prof_image_1 from "@/assets/image2.png"
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


export const reviews: Reviews = {
  label: 'Review',
  title: 'Our Happy Charlotte Customers',
  write_review_text: 'Write a Review',
  items: [
    {author: 'S. Dawson', rating: 5, date: '4 days ago', source: 'google', text: 'Dean & Matt from Sunshine came out to provide an estimate for a water leak that occurred in my kitchen. They were professional, explained every step of the process and had the drying equipment in place the same afternoon. Highly recommend!'},
    {author: 'Lauren Iske', rating: 5, date: '7 days ago', source: 'google', text: 'When a leak caused by our freezer/ice maker caused serious damage to a section of our wood floors, the team came out quickly, dried everything out and helped us through the whole insurance claim. Couldn\'t be happier with the result.'},
    {author: 'Eric Seighman', rating: 5, date: '1 month ago', source: 'google', text: 'I CANNOT RECOMMEND THIS COMPANY ENOUGH!!!! I showed both Brian and Dean where I had a pipe burst in the crawlspace and within hours they had a plan, a crew and the equipment on site. Fantastic communication from start to finish.'},
    {author: 'Eric Weed', rating: 5, date: '3 months ago', source: 'google', text: 'We had soot blown around the entire first floor of the house. We didn\'t know where to begin, but the crew cleaned every surface, removed the smell and got us back home much faster than we expected.'},
    {author: 'Maria Lopez', rating: 5, date: '2 weeks ago', source: 'facebook', text: 'Fast response in the middle of the night after our water heater failed. The technicians were kind, careful with our belongings and left the basement cleaner than before.'},
    {author: 'James Carter', rating: 5, date: '1 month ago', source: 'facebook', text: 'Great experience with mold remediation in our attic. They showed us the test results, explained the containment process and finished right on schedule.'},
    {author: 'Patricia Moore', rating: 5, date: '2 months ago', source: 'bbb', text: 'Honest pricing and excellent work on our fire damage restoration. The project manager kept us updated daily and worked directly with our insurance adjuster.'},
  ],
}


export const professionals: Professionals = {
  title: "Charlotte's Restoration Professionals",
  tabs: [
    {
      label: 'Water Damage Restoration',
      title: '24/7 Emergency Water Damage Restortion Services',
      text: 'There are many places in your Aurora home where water damage can take place, from your basement to the attic. Water damage can occur from frozen pipes, frozen sprinkler lines, rusted or oxidized pipes, toilet overflow, toilet leaks, the water heater, refrigerator, dishwasher overflow or washing machine, hardwood floor water damage, broken pipe water damage.',
      image_url: prof_image_1,
    },
    {
      label: 'Biohazard',
      title: 'Safe and Discreet Biohazard Cleanup Services',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      image_url: services_image,
    },
    {
      label: 'Commercial Restoration',
      title: 'Commercial Restoration for Businesses of Any Size',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      image_url: prof_image_1,
    },
  ],
}

const process_step_text =
  "If you need help, don't hesitate to give us a call. We're available 24/7 to assist you. Whether you need us immediately or have a general restoration question, we are happy to help."

export const restoration_process: Process = {
  label: 'Our Process',
  title: 'Our 3 Step Restoration Process',
  steps: [
    { title: 'Give Us a Call', text: process_step_text, color: 'sky' },
    { title: 'We Get On Site ASAP', text: process_step_text, color: 'orange' },
    { title: 'Your Life, Restored', text: process_step_text, color: 'purple' },
  ],
}

const faq_answer =
  'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor'

export const faq: Faq = {
  title: 'Frequently Asked Questions',
  button_text: 'More Questions',
  items: [
    { question: 'Are you Licensed and insured?', answer: faq_answer },
    { question: 'Do you offer free quotes?', answer: faq_answer },
    { question: 'Is NoCode the future of the web?', answer: faq_answer },
    { question: 'What type of equipment do you use?', answer: faq_answer },
    { question: 'What payment methods do you accept?', answer: faq_answer },
    { question: 'Who are the Webflow founders?', answer: faq_answer },
  ],
}

const experience_text =
  'We Are Available Around The Clock To Assist You In Anyway Possible. We Are Proud To Also Offer 100% Customer Satisfaction Guarantee!'

export const experience: Experience = {
  title: 'The Sunshine Restoration Experience',
  cards: [
    { title: 'Customer Service', text: experience_text, icon: 'headset', color: 'sky' },
    { title: 'Fast, Free Estimates', text: experience_text, icon: 'clipboard', color: 'purple' },
    { title: 'Locally Owned', text: experience_text, icon: 'pin', color: 'orange' },
    { title: 'Residential & Commercial', text: experience_text, icon: 'home', color: 'green' },
  ],
}

export const footer: FooterData = {
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about_us' },
    { label: 'How it Work', href: '#how_it_works' },
    { label: 'Services', href: '#services' },
    { label: 'Jobs', href: '#jobs' },
    { label: 'Contact', href: '#contact' },
  ],
  socials: ['facebook', 'twitter', 'youtube'],
}

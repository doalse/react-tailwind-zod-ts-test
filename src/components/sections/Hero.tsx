import { Button } from '@/components/ui/Button'
import ico1 from "@/assets/Rectangle 20.png"
import ico2 from "@/assets/Rectangle 21.png"
import ico3 from "@/assets/Rectangle 22.png"

export function Hero() {
  return (
    <section className="py-24 text-left">
        <h1 className="text-4xl md:text-7xl text-indigo-900 font-bold leading-normal">
          Water Damage <br />Restoration Company
        </h1>
        <div className="mt-6 max-w-xl text-lg text-ink-600">
          <div className="flex items-center">
            <img src={ico1} alt="ico1" />
            <span className='ml-2.5'>24/7 Emergency Services</span>
          </div>
          <div className="flex items-center">
            <img src={ico2} alt="ico2" />
            <span className='ml-2.5'>45 Minute On-Site Guarantee</span>
          </div>
          <div className="flex items-center">
            <img src={ico3} alt="ico3" />
            <span className='ml-2.5'>Work Directly With Your Insurance Company</span>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-left gap-4">
          <Button variant="primary" className="w-2xs py-6 text-base">
            GET A FAST QUOTE
          </Button>
          <Button variant="secondary" className="w-2xs py-6 text-base">
            Contact Us
          </Button>
        </div>
    </section>
  )
}

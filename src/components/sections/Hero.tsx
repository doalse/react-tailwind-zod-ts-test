import { Button } from '@/components/ui/Button'
import ico1 from "@/assets/Rectangle 20.png"
import ico2 from "@/assets/Rectangle 21.png"
import ico3 from "@/assets/Rectangle 22.png"

export function Hero() {
  return (
    <section className="py-12 text-left md:py-24">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-indigo-900 font-bold leading-tight lg:leading-normal">
          Water Damage <br />Restoration Company
        </h1>
        <div className="mt-6 flex max-w-xl flex-col gap-1 text-base text-ink-600 md:text-lg">
          <div className="flex items-center">
            <img src={ico1} alt="ico1" className="shrink-0" />
            <span className='ml-2.5'>24/7 Emergency Services</span>
          </div>
          <div className="flex items-center">
            <img src={ico2} alt="ico2" className="shrink-0" />
            <span className='ml-2.5'>45 Minute On-Site Guarantee</span>
          </div>
          <div className="flex items-center">
            <img src={ico3} alt="ico3" className="shrink-0" />
            <span className='ml-2.5'>Work Directly With Your Insurance Company</span>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button variant="primary" className="w-full py-4 text-base sm:w-2xs md:py-6">
            GET A FAST QUOTE
          </Button>
          <Button variant="secondary" className="w-full py-4 text-base sm:w-2xs md:py-6">
            Contact Us
          </Button>
        </div>
    </section>
  )
}

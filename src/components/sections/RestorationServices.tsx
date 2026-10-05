import { useRef } from 'react'
import gsap from 'gsap'
import { restoration_services } from '@/data/content'
import { cn } from '@/lib/utils'
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { useScrollReveal } from '@/hooks/useScrollReveal'

const cardColors = ['#E5F9FF', '#FFEDDD', '#F0DDFF', '#E8FFDD'];

// Round every corner except the one facing the center of the 2x2 grid (single column keeps all corners)
const cornerClassNames = [
  'rounded-4xl md:rounded-br-none', // top-left
  'rounded-4xl md:rounded-bl-none', // top-right
  'rounded-4xl md:rounded-tr-none', // bottom-left
  'rounded-4xl md:rounded-tl-none', // bottom-right
];

function setRoundedClassName(index: number) {
  return cornerClassNames[index % cornerClassNames.length];
}

export function RestorationServices () {
  const cardRefs = useRef<(HTMLLIElement | null)[]>([])
  const sectionRef = useScrollReveal<HTMLElement>()

  // Lift and grow with a springy overshoot, then settle back the same way
  function animateCard(index: number, hovered: boolean) {
    gsap.to(cardRefs.current[index], {
      scale: hovered ? 1.05 : 1,
      y: hovered ? -12 : 0,
      duration: 0.9,
      ease: 'elastic.out(1, 0.5)',
      overwrite: 'auto',
    })
  }

  return(
    <section ref={sectionRef} id="restoration_services" className="relative overflow-hidden py-20 md:py-28 lg:py-36 bg-white">
      <Container className='flex flex-col'>
        <h2 data-reveal="up" className="text-center text-3xl sm:text-4xl lg:text-6xl text-indigo-900 font-bold mb-6 md:mb-10 leading-tight lg:leading-normal">{ restoration_services.title }</h2>
        <p data-reveal="up" className='text-center font-bold subtitle inline-block text-lg md:text-2xl m-auto mb-12 md:mb-20'>{ restoration_services.subHeader }</p>
        <ul className="tiles grid grid-cols-1 md:grid-cols-2 gap-6">
          { restoration_services.cards.map((card, i)=>{
            return <li key={i} ref={(el) => { cardRefs.current[i] = el }} data-reveal="scale" className={cn('h-80 sm:h-96 lg:h-[520px] xl:h-[600px] px-6 text-center flex items-center justify-center flex-col', setRoundedClassName(i))} style={{ backgroundColor: cardColors[i] }} onPointerEnter={(e) => e.pointerType === 'mouse' && animateCard(i, true)} onPointerLeave={(e) => e.pointerType === 'mouse' && animateCard(i, false)}>
              <img className='mb-5 w-20 md:w-auto' src={card.logo_url} alt={card.title} />
              <span className='text-2xl md:text-3xl lg:text-4xl text-black font-bold mb-5'>{card.title}</span>
              <Button variant='primary' className='w-full max-w-3xs h-12 md:h-14 text-lg md:text-xl'>{card.btn_text}</Button>
            </li>
          }) }
        </ul>
        <Button data-reveal="up" variant="secondary" className='w-full sm:w-auto px-12 py-6 md:px-28 md:py-10 mt-12 md:mt-20 m-auto text-xl md:text-3xl'>{ restoration_services.button_text }</Button>
      </Container>
    </section>
  );
}
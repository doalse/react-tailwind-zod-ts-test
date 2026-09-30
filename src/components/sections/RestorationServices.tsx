import { useRef } from 'react'
import gsap from 'gsap'
import { restoration_services } from '@/data/content'
import { cn } from '@/lib/utils'
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"

const cardColors = ['#E5F9FF', '#FFEDDD', '#F0DDFF', '#E8FFDD'];

// Round every corner except the one facing the center of the 2x2 grid
const cornerClassNames = [
  'rounded-4xl rounded-br-none', // top-left
  'rounded-4xl rounded-bl-none', // top-right
  'rounded-4xl rounded-tr-none', // bottom-left
  'rounded-4xl rounded-tl-none', // bottom-right
];

function setRoundedClassName(index: number) {
  return cornerClassNames[index % cornerClassNames.length];
}

export function RestorationServices () {
  const cardRefs = useRef<(HTMLLIElement | null)[]>([])

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
    <section id="restoration_services" className="relative overflow-hidden py-36 bg-white">
      <Container className='flex flex-col'>
        <h2 className="text-center text-4xl md:text-6xl text-indigo-900 font-bold mb-10 leading-normal">{ restoration_services.title }</h2>
        <p className='text-center font-bold subtitle inline-block text-2xl m-auto mb-20'>{ restoration_services.subHeader }</p>
        <ul className="tiles grid grid-cols-1 md:grid-cols-2 gap-6">
          { restoration_services.cards.map((card, i)=>{
            return <li key={i} ref={(el) => { cardRefs.current[i] = el }} className={cn('h-[600px] text-center flex items-center justify-center flex-col', setRoundedClassName(i))} style={{ backgroundColor: cardColors[i] }} onMouseEnter={() => animateCard(i, true)} onMouseLeave={() => animateCard(i, false)}>
              <img className='mb-5' src={card.logo_url} alt={card.title} />
              <span className='text-4xl text-black font-bold mb-5'>{card.title}</span>
              <Button variant='primary' className='w-3xs h-14' style={{ fontSize: "20px" }}>{card.btn_text}</Button>
            </li>
          }) }
        </ul>
        <Button variant="secondary" className='px-28 py-10 mt-20 m-auto' style={{fontSize: "30px"}}>{ restoration_services.button_text }</Button>
      </Container>
    </section>
  );
}
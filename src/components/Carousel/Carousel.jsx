import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {useEffect}from 'react'
import css from './Carousel.module.css'

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
  
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])

  return (
    <div className={css.embla} ref={emblaRef}>
      <div className={css.embla__container}>
        <div className={css.embla__slide}>Slide_1</div>
        <div className={css.embla__slide}>Slide_2</div>
        <div className={css.embla__slide}>Slide_3</div>
        <div className={css.embla__slide}>Slide_4</div>
        <div className={css.embla__slide}>Slide_5</div>
      </div>
    </div>
  )
}
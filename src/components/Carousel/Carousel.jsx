// import useEmblaCarousel from 'embla-carousel-react'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'
// import Autoplay from 'embla-carousel-autoplay'
// import { useEffect, useCallback } from 'react'
// import {images} from '../../imageList.js'
// import css from './Carousel.module.css'

// export default function Carousel() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  
//   useEffect(() => {
//     if (emblaApi) {
//       console.log(emblaApi)
//       console.log(emblaApi.slideNodes())
//     }
//   }, [emblaApi])


//   const onNavButtonClick = useCallback((emblaApi) => {
//     const autoplay = emblaApi?.plugins()?.autoplay
//     if (!autoplay) return
    
//     const resetOrStop =
//       autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop
    
//     resetOrStop()
//   }, [])

//     const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
//     emblaApi,
//     onNavButtonClick
//   )


//   return (
//     <section className={css.embla}>
//     <div className={css.embla__viewport} ref={emblaRef}>
//         <div className={css.embla__container}>
//           {images.map(image =>
//             <div className={css.embla__slide} key={image.id}><img src={image.imgUrl} className={css.img} /></div>
            
//         )}
        
//       </div>
//       </div>
//       <div className={css.embla__controls}>
//         <div className={css.embla__dots}>
//           {scrollSnaps.map((_, index) => (
//             <DotButton key={index} onClick={() => onDotButtonClick(index)}  className={`${css.embla__dot} ${index === selectedIndex ? ' css.embla__dot--selected' : ''}`}
// />))}

//         </div>
        
//     </div>
//     </section>
//   )
// }


import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useCallback } from 'react'
import {images} from '../../imageList.js'
import  './Carousel.css'

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi)
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])


  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    
    const resetOrStop =
      autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop
    
    resetOrStop()
  }, [])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )


  return (
    <section className="embla">
    <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map(image =>
            <div className="embla__slide" key={image.id}><img src={image.imgUrl} className="img" /></div>
            
        )}
        
      </div>
<div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton key={index} onClick={() => onDotButtonClick(index)}   className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
/>))}

        </div>
        
    </div>
    
        </div>
    </section>
  )
}
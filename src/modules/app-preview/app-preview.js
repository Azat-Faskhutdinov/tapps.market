import { Navigation, Pagination, Swiper } from 'swiper'
import { moonBlock } from '@verno.digital/moon-block'

moonBlock('.app-preview', ({ block }) => {
  const swiper = block.querySelector('.swiper')
  const prev = block.querySelector(`[data-id="prev"]`)
  const next = block.querySelector(`[data-id="next"]`)

  const instants = new Swiper(swiper, {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    spaceBetween: 15,
    breakpoints: {
      0: {
        slidesPerView: 1.4,
        spaceBetween: 15,
        loop: true
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 15
      }
    },
    navigation: {
      nextEl: next,
      prevEl: prev
    }
  })
})

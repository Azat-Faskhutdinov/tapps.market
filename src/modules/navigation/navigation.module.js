import { Navigation, Pagination, Swiper } from 'swiper'
import { moonBlock } from '@verno.digital/moon-block'

moonBlock('.navigation', ({ block }) => {
  const swiper = block.querySelector('.swiper')
  const prev = block.querySelector(`[data-id="prev"]`)
  const next = block.querySelector(`[data-id="next"]`)

  const instants = new Swiper(swiper, {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 15,
    navigation: {
      nextEl: next,
      prevEl: prev
    }
  })

  if (swiper) {
    setTimeout(() => {
      instants.update()
      instants.pagination.update()
    }, 10)
  }
})

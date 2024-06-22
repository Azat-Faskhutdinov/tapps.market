import { moonBlock } from '@verno.digital/moon-block'

moonBlock('.pagination', ({ block }) => {
  const listLinks = block.querySelectorAll('a')

  const resetAll = () => {
    listLinks.forEach((element) => {
      element.classList.remove('pagination__item--active')
    })
  }

  listLinks.forEach((element) => {
    element.addEventListener('click', () => {
      resetAll()
      element.classList.add('pagination__item--active')
    })
  })
})

import { moonBlock } from '@verno.digital/moon-block'

moonBlock('.lang', ({ block }) => {
  const panel = block.querySelector('.lang__panel')
  const body = block.querySelector('.lang__body')
  const listItems = body.querySelectorAll('.lang__item')
  const closeButton = block.querySelector('.lang__close')

  const disableAll = () => {
    listItems.forEach((element) => {
      element.classList.remove('lang__item--active')
    })
  }

  listItems.forEach((element) => {
    element.addEventListener('click', () => {
      const attributeValue = element.getAttribute('data-lang')
      panel.innerText = attributeValue
      disableAll()
      element.classList.add('lang__item--active')
    })
  })

  panel.addEventListener('click', (event) => {
    block.classList.add('lang--opened')
  })

  closeButton.addEventListener('click', () => {
    block.classList.remove('lang--opened')
  })

  document.addEventListener('click', ({ target }) => {
    !block.contains(target) && block.classList.remove('lang--opened')
  })
})

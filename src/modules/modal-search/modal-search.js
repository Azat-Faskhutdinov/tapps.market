import { moonBlock } from '@verno.digital/moon-block'

moonBlock('.modal-search', ({ block }) => {
  const input = block.querySelector(`[data-id="search" ]`)
  const listCards = [...block.querySelectorAll('.modal-search__card')]
  const button = block.querySelector('.search-input__button')
  const message = block.querySelector(`[data-id="message"]`)
  const body = block.querySelector('.modal-search__body')

  button.addEventListener('click', (e) => {
    const value = input.value.toLowerCase()

    e.preventDefault()

    if (value.length < 1) {
      body.classList.remove('modal-search__body--show')
    } else {
      body.classList.add('modal-search__body--show')
    }

    const filteredCardsList = listCards.filter((card) => {
      const cardTitle = card.querySelector('.listing-card__title')
      return cardTitle.innerText.toLowerCase().includes(value)
    })

    listCards.forEach((user) => {
      const cardTitle = user.querySelector('.listing-card__title')
      const isVisible = cardTitle.innerText.toLowerCase().includes(value)
      user.classList.toggle('modal-search__card--hide', !isVisible)
    })

    if (filteredCardsList.length < 1) {
      message.style.display = 'block'
    } else {
      message.style.display = 'none'
    }
  })
})

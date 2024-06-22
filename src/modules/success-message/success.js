import { moonBlock } from '@verno.digital/moon-block'
moonBlock('.success-message', ({ block }) => {
  const closeButton = block.querySelector('.success-message__button')

  closeButton.addEventListener('click', () => {
    block.classList.remove('success-message--active')
  })
})

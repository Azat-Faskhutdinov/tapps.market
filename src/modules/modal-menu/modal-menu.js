import { moonBlock } from '@verno.digital/moon-block'

moonBlock('.modal-menu__accordion', ({ block }) => {
  const modalMenu = document.querySelector(`.modal-menu`)
  const modalMenuStyle = getComputedStyle(modalMenu)
  const panel = block.querySelector(`[data-id="panel"]`)
  const body = block.querySelector('.modal-menu__collapse')
  const listItems = block.querySelectorAll('.modal-menu__item')
  const initialValue = modalMenuStyle.getPropertyValue('--height-value')

  const disableAll = () => {
    listItems.forEach((element) => {
      element.classList.remove('modal-menu__item--active')
    })
  }

  listItems.forEach((element) => {
    element.addEventListener('click', () => {
      panel.innerText = element.innerText
      disableAll()
      element.classList.add('modal-menu__item--active')
      block.classList.remove('modal-menu__accordion--opened')
      modalMenu.style.setProperty('--height-value', '264px')
    })
  })

  panel.addEventListener('click', (event) => {
    block.classList.add('modal-menu__accordion--opened')
    modalMenu.style.setProperty('--height-value', '330px')
    console.log(initialValue)
  })

  document.addEventListener('click', ({ target }) => {
    if (!block.contains(target)) {
      block.classList.remove('modal-menu__accordion--opened')
      modalMenu.style.setProperty('--height-value', '264px')
    }
  })
})

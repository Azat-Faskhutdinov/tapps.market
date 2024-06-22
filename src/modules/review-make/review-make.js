import { moonBlock } from '@verno.digital/moon-block'
import { useYup } from '@/scripts/utils/use-yup'
import { object, string } from 'yup'
import { moonModal } from '@/scripts/common/modal.js'

const reqMsg = 'Ошибка, поле не заполнено'

const vacancyScheme = object({
  // review: string().min(10, 'Имя введено некорректно').required(reqMsg),
  stars: string().oneOf(['1', '2', '3', '4', '5'])
})

moonBlock('.review-make', ({ block }) => {
  const stars = document.querySelector(`[data-id="stars"]`) ?? ''

  if (stars) {
    const input = block.querySelector('.review-make__input')
    const sendButton = block.querySelector(`[data-id='send']`)
    const successMessage = document.querySelector('.success-message')

    const yup = useYup({
      attribute: 'is-error',
      form: block,
      selector: {
        static: 'data-id-static',
        error: 'data-id-error'
      }
    })

    stars.value = 0

    stars.addEventListener('change', () => {
      sendButton.removeAttribute('disabled')
    })

    block.addEventListener('reset', () => {
      yup.hide()
      sendButton.setAttribute('disabled', ' ')
    })

    block.addEventListener('input', () => {
      yup.hide()
    })

    block.addEventListener('submit', async (event) => {
      event.preventDefault()

      const formData = yup.getYupData()

      try {
        await vacancyScheme.validate(formData, { abortEarly: false })
        console.log(formData)
        successMessage.classList.add('success-message--active')

        setTimeout(() => successMessage.classList.remove('success-message--active'), 10000)
        block.reset()
        sendButton.setAttribute('disabled', ' ')
      } catch (error) {
        error.inner && yup.show(error)
      }
    })
  }
})

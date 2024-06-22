import cn from 'classnames'
import { Icon } from '../icon/icon'
import { Container } from '../container/container'

interface props {
  className?: string
}
export const SuccessMessage = (props: props) => {
  const { className } = props

  return (
    <Container className='success-message'>
      <div class='success-message__body'>
        Review sent. Thanks for your feedback!{' '}
        <button class='success-message__button'>
          <Icon name='close-white' />
        </button>
      </div>
    </Container>
  )
}

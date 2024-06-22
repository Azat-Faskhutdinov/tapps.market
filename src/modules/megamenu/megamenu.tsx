import cn from 'classnames'
import { Modal } from '../modal/modal'
import { Logo } from '../logo/logo'
import { Icon } from '../icon/icon'

const CloseButton = () => {
  return (
    <button data-modal-close>
      <Icon name='close' />
    </button>
  )
}

interface props {
  className?: string
  id: string
  isSearch?: boolean
  children?: any
}

export const Megamenu = (props: props) => {
  const { className, id, isSearch, children } = props

  return (
    <Modal id={id}>
      <div class={cn('megamenu', { 'megamenu--search': isSearch }, className)}>
        <div class='megamenu__header'>
          <Logo />

          {isSearch ? (
            <div class='megamenu__buttons'>
              <CloseButton />
              <button data-modal-open='#menu'>
                <Icon name='burger' />
              </button>
            </div>
          ) : (
            <div class='megamenu__buttons'>
              <button data-modal-open='#search'>
                <Icon name='search' />
              </button>
              <CloseButton />
            </div>
          )}
        </div>

        <div class='megamenu__body'>{children}</div>
      </div>
    </Modal>
  )
}

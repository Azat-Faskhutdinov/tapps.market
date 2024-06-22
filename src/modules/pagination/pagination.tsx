import cn from 'classnames'
import { Icon } from '../icon/icon'

interface props {
  className?: string
}
export const Pagination = (props: props) => {
  const { className } = props

  return (
    <div class={cn('pagination', className)}>
      <button class='pagination__item'>
        <Icon name='pag-arrow-left' />
      </button>

      <span></span>

      <a href='javascript:void(0)' class='pagination__item pagination__item--active'>
        1
      </a>
      <a href='javascript:void(0)' class='pagination__item'>
        2
      </a>
      <a href='javascript:void(0)' class='pagination__item'>
        3
      </a>

      <span></span>

      <button class='pagination__item'>
        <Icon name='pag-arrow-right' />
      </button>
    </div>
  )
}

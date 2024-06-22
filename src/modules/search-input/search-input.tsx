import cn from 'classnames'
import { Icon } from '../icon/icon'

interface props {
  className?: string
}
export const SearchInput = (props: props) => {
  const { className } = props

  return (
    <form class={cn('search-input', className)}>
      <label class='search-input__label'>
        <input
          placeholder='Search apps'
          type='search'
          class='search-input__input'
          data-id='search'
        />
        <button type='submit' class='search-input__button'>
          <Icon name='union' />
        </button>
      </label>
    </form>
  )
}

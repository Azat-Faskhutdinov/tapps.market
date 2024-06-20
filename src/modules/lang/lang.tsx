import cn from 'classnames'
import { Icon } from '../icon/icon'
import { listLang } from './data-lang'

interface props {
  className?: string
}
export const Lang = (props: props) => {
  const { className } = props

  return (
    <div class={cn('lang', className)}>
      <button class='lang__panel'>EN</button>

      <div class='lang__body'>
        {listLang.map((item, index) => {
          const setActive = { 'lang__item--active': index === 0 }
          return (
            <a href='javascript:void(0)' class={cn('lang__item', setActive)} data-lang={item.id}>
              {item.title}
            </a>
          )
        })}
        <button class='lang__close'>
          <Icon name='lang-close' />
        </button>
      </div>
    </div>
  )
}

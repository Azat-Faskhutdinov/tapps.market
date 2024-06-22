import cn from 'classnames'
import { Megamenu } from '../megamenu/megamenu'
import { Button } from '../button/button'
import { listLang } from '../lang/data-lang'

interface props {
  className?: string
}
export const ModalMenu = (props: props) => {
  const { className } = props

  return (
    <Megamenu id='menu'>
      <div class={cn('modal-menu', className)}>
        <Button theme='ghost' tag='a'>
          Log in
        </Button>

        <div class='modal-menu__accordion'>
          <Button theme='ghost' data-id='panel'>
            English
          </Button>
          <div class='modal-menu__collapse'>
            <div class='modal-menu__body'>
              {listLang.map((item, index) => {
                const setActive = { 'modal-menu__item--active': index === 0 }
                return (
                  <a
                    href='javascript:void(0)'
                    class={cn('modal-menu__item', setActive)}
                    data-lang={item.id}
                  >
                    {item.title}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Megamenu>
  )
}

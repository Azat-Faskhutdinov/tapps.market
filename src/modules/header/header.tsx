import cn from 'classnames'
import { Container } from '../container/container'
import { Logo } from '../logo/logo'
import { Lang } from '../lang/lang'
import burgerImage from './assets/burger.svg'
import searchImage from './assets/search.svg'
import { Button } from '../button/button'
import { SearchInput } from '../search-input/search-input'

interface props {
  className?: string
  mainPage?: boolean
}
export const Header = (props: props) => {
  const { className, mainPage } = props

  const mod = {
    'header--custom': mainPage
  }

  return (
    <div class={cn('header', mod, className)}>
      <Container>
        <div class='header__body'>
          <Logo className='header__logo' />

          {!mainPage && <SearchInput className='header__search' />}

          <div class='header__controls'>
            <Button theme='ghost' className='header__desk-button'>
              Log in
            </Button>
            <Lang className='header__desk-button' />

            <button class='header__media-button' data-modal-open='#search'>
              <img src={searchImage} alt='search-button' />
            </button>

            <button class='header__media-button' data-modal-open='#menu'>
              <img src={burgerImage} alt='menu-button' />
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

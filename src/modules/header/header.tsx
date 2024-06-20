import cn from 'classnames'
import { Container } from '../container/container'
import { Logo } from '../logo/logo'
import { Lang } from '../lang/lang'
import burgerImage from './assets/burger.svg'
import searchImage from './assets/search.svg'
import { Button } from '../button/button'

interface props {
  className?: string
}
export const Header = (props: props) => {
  const { className } = props

  return (
    <div class={cn('header', className)}>
      <Container>
        <div class='header__body'>
          <Logo className='header__logo' />

          <div class='header__controls'>
            <Button theme='ghost' className='header__desk-button'>
              Log in
            </Button>
            <Lang className='header__desk-button' />

            <button class='header__media-button'>
              <img src={searchImage} alt='search-button' />
            </button>

            <button class='header__media-button'>
              <img src={burgerImage} alt='menu-button' />
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

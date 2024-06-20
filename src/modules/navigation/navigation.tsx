import cn from 'classnames'
import { Container } from '../container/container'
import { navList } from './data-nav'
import { array } from '@/views/utils/array'
import { Icon } from '../icon/icon'

interface props {
  className?: string
}
export const Navigation = (props: props) => {
  const { className } = props

  return (
    <Container className='navigation'>
      <div class='navigation__arrow navigation__arrow--left' data-id='prev'>
        <div class='navigation__back'></div>
        <Icon name='arrow-left' />
      </div>
      <div class='swiper'>
        <nav class='swiper-wrapper'>
          {array(2).map(() => (
            <>
              {navList.map((slide) => (
                <a href='javascript:void(0)' class='swiper-slide navigation__tab'>
                  {slide}
                </a>
              ))}
            </>
          ))}
        </nav>
      </div>
      <div class='navigation__arrow navigation__arrow--right' data-id='next'>
        <div class=' navigation__back navigation__back--right'></div>
        <Icon name='arrow-right' />
      </div>
    </Container>
  )
}

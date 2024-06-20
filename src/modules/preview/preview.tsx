import cn from 'classnames'
import { Container } from '../container/container'
import bgImage from './assets/bg.svg'
import { SearchInput } from '../search-input/search-input'

interface props {
  className?: string
}
export const Preview = (props: props) => {
  const { className } = props

  return (
    <div class={cn('preview', className)}>
      <Container className='preview__container'>
        <img src={bgImage} alt='' class='preview__bg' />
        <div class='preview__body'>
          <h1 class='preview__title'>Explore 806 apps in TON Ecosystem</h1>
          <SearchInput className='preview__search' />
        </div>
      </Container>
    </div>
  )
}

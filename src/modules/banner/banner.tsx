import cn from 'classnames'
import { Container } from '../container/container'

interface props {
  className?: string
}
export const Banner = (props: props) => {
  const { className } = props

  return (
    <div class={cn('banner', className)}>
      <Container>
        <div class='banner__body'></div>
      </Container>
    </div>
  )
}

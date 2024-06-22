import cn from 'classnames'
import { Container } from '../container/container'
import { Button } from '../button/button'

interface props {
  className?: string
}
export const Banner = (props: props) => {
  const { className } = props

  return (
    <div class={cn('banner', className)}>
      <Container className='banner__container'>
        <div class='banner__body'>
          <h2>Explore all categories</h2>
          <p>
            Discover The Open Network with the help of TON App. Explore trending dApps, NFT
            collections, marketplaces, DeFi tools and much more. Go ahead and dive into the Web3
            world!
          </p>
          <Button theme='primary' tag='a'>
            All categories
          </Button>
        </div>
      </Container>
    </div>
  )
}

import cn from 'classnames'
import { Container } from '../container/container'
import { TitleHeader } from '../title-header/title-header'
import { listingCards, mainListCards } from '@/views/data/data-main-listing'
import { ListingCard } from '../listing-card/listing-card'

interface props {
  className?: string
}
export const CategoryDetail = (props: props) => {
  const { className } = props

  return (
    <div class={cn('category-detail', className)}>
      <Container>
        <TitleHeader
          isMediaDesc
          title={mainListCards[12].title}
          desc={mainListCards[12].desc}
          count={mainListCards[12].count}
          className='category-detail__header'
        />
      </Container>
      <div class='category-detail__gray-back'>
        <Container className='category-detail__body'>
          {listingCards.map((card, i) => (
            <ListingCard {...card} count={++i} isActive={i <= 3} />
          ))}
        </Container>
      </div>
    </div>
  )
}

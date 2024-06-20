import cn from 'classnames'
import { Container } from '../container/container'
import { TitleHeader } from '../title-header/title-header'
import { Button } from '../button/button'
import { ListingCard } from '../listing-card/listing-card'
import { UiScrollbar } from '../ui-scrollbar/ui-scrollbar'

interface card {
  title: string
  desc: string
}

interface props {
  title: string
  desc: string
  count: number
  listingCards: Array<card>
}
export const Listing = (props: props) => {
  const { title, desc, count, listingCards } = props

  return (
    <Container className='listing'>
      <div class='listing__header'>
        <TitleHeader title={title} desc={desc} count={count} />
        <Button theme='primary' tag='a'>
          See All
        </Button>
      </div>
      <UiScrollbar className='listing__scroll'>
        <div class='listing__body'>
          {listingCards.map((card, index) => (
            <ListingCard
              className='listing__card'
              title={card.title}
              desc={card.desc}
              count={++index}
              isActive={index <= 3}
            />
          ))}
        </div>
      </UiScrollbar>
    </Container>
  )
}

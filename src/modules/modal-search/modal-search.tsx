import cn from 'classnames'
import { Megamenu } from '../megamenu/megamenu'
import { SearchInput } from '../search-input/search-input'
import { ListingCard } from '../listing-card/listing-card'
import { listingCards } from '@/views/data/data-main-listing'

interface props {}
export const ModalSearch = (props: props) => {
  const {} = props

  return (
    <Megamenu id='search' isSearch>
      <div class='modal-search'>
        <SearchInput />

        <div class='modal-search__body'>
          <div class='modal-search__scroll'>
            {listingCards.map((elem, i) => (
              <ListingCard {...elem} className='modal-search__card' />
            ))}
            <p data-id='message'>По вашему поисковому запросу ничего не найдено</p>
          </div>
        </div>
      </div>
    </Megamenu>
  )
}

import cn from 'classnames'
import cardPlumbImage from './assets/plumb.svg'
import { Stars } from '../stars/stars'
import { Icon } from '../icon/icon'
import { CardImageWrap } from '../card-image-wrap/card-image-wrap'

interface props {
  className?: string
  title: string
  desc: string
  count: number
  isActive?: boolean
}
export const ListingCard = (props: props) => {
  const { className, title, desc, count, isActive } = props

  const mainMod = {
    'listing-card--search': !count
  }

  return (
    <a href='javascript:void(0)' class={cn('listing-card', mainMod, className)}>
      <CardImageWrap src={cardPlumbImage} isGold={isActive} count={count} />

      <div class='listing-card__right'>
        <h3 class='listing-card__title'>{title}</h3>
        <p class='listing-card__desc'>{desc}</p>

        <div class='listing-card__footer'>
          <Stars />

          <div class='listing-card__links'>
            <object>
              <a href='/' class='listing-card__link'>
                <Icon name='planet' />
              </a>
            </object>
            <object>
              <a href='/' class='listing-card__link'>
                <Icon name='telegram' />
              </a>
            </object>
          </div>
        </div>
      </div>
    </a>
  )
}

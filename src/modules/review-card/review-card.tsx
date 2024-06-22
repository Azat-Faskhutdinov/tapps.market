import cn from 'classnames'
import { Stars } from '../stars/stars'
import plumbImage from './assets/user-plumb.svg'

interface props {
  className?: string
}
export const ReviewCard = (props: props) => {
  const { className } = props

  return (
    <div class={cn('review-card', className)}>
      <div class='review-card__header'>
        <div class='review-card__info'>
          <img src={plumbImage} alt='' loading='lazy' class='review-card__user-image' />

          <div class='review-card__info-wrap'>
            <h3>zigagr</h3>
            <Stars />
          </div>
        </div>

        <time datetime='18.05.2024'> 18.05.2024</time>
      </div>
      <p class='review-card__desc'>
        Сделала оплату за телефон. Всё супер оплата прошла мгновенно. Рекомендую всем!
      </p>
    </div>
  )
}

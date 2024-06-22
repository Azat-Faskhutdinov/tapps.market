import cn from 'classnames'
import { Container } from '../container/container'
import { ReviewMake } from '../review-make/review-make'
import { ReviewCard } from '../review-card/review-card'
import { array } from '@/views/utils/array'
import { Pagination } from '../pagination/pagination'
import { ReviewAside } from '../review-aside/review-aside'

interface props {
  className?: string
  isUserAuth?: boolean
}
export const Reviews = (props: props) => {
  const { className, isUserAuth } = props

  return (
    <div class={cn('reviews', className)}>
      <Container className='reviews__body'>
        <div class='reviews__content'>
          <h2 id='reviews'>Reviews</h2>
          <ReviewMake className='reviews__form' isUserAuth={isUserAuth} />

          <div class='reviews__wrap'>
            {array(5).map(() => (
              <ReviewCard />
            ))}
          </div>

          <Pagination className='reviews__pag' />
        </div>

        <aside class='reviews__aside'>
          <ReviewAside />
        </aside>
      </Container>
    </div>
  )
}

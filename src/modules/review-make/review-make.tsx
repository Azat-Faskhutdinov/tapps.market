import cn from 'classnames'
import { Button } from '../button/button'
import { SmartStars } from '../smart-stars/smart-stars'
import plumbImage from '@/modules/review-card/assets/user-plumb.svg'

interface props {
  className?: string
  isUserAuth?: boolean
}
export const ReviewMake = (props: props) => {
  const { className, isUserAuth } = props

  return (
    <form class={cn('review-make', className)}>
      {isUserAuth ? (
        <>
          <div class='review-make__user'>
            <img src={plumbImage} alt='' />

            <div class='review-make__user-right'>
              <h3>Riedler</h3>
              <SmartStars className='review-make__stars' />
            </div>
          </div>

          <input
            data-id-static='review'
            data-id-error='review'
            name='review'
            type='text'
            class='review-make__input'
            placeholder='Enter review text'
          />

          <div class='review-make__footer'>
            <p>Write a comment and rate app to submit a review</p>

            <div class='review-make__controls'>
              <Button theme='cancel' data-id='cancel' type='reset'>
                Cancel
              </Button>
              <Button theme='primary' disabled data-id='send'>
                Send review
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div class='review-make__wrap'>
          <input type='text' class='review-make__input' disabled placeholder='Enter review text' />
          <a href='javascript:void(0)' class='review-make__sign-in'>
            Sign in with Telegram
          </a>
          <p>to leave a review</p>
        </div>
      )}
    </form>
  )
}

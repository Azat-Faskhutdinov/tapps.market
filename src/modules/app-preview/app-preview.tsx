import cn from 'classnames'
import { Container } from '../container/container'
import { Button } from '../button/button'
import { Stars } from '../stars/stars'
import { CardImageWrap } from '../card-image-wrap/card-image-wrap'

import cardPlumbImage from './assets/app.png'
import appPreview1 from './assets/app-preview-1.png'
import appPreview2 from './assets/app-preview-2.png'
import appPreview3 from './assets/app-preview-3.png'
import appPreview4 from './assets/app-preview-4.png'
import { array } from '@/views/utils/array'
import { Icon } from '../icon/icon'

interface props {
  className?: string
  isGold?: boolean
}
export const AppPreview = (props: props) => {
  const { className, isGold } = props

  const mod = {
    'app-preview__img-wrap--golden': isGold
  }

  return (
    <div class={cn('app-preview', className)}>
      <Container className='app-preview__header'>
        <div class='app-preview__card'>
          <CardImageWrap src={cardPlumbImage} isGold count={2} />

          <div class='app-preview__right'>
            <h3 class='app-preview__title'>Moneton</h3>
            <p class='app-preview__desc'>Сервис для оплаты различных услуг за TON</p>

            <div class='app-preview__footer'>
              <Stars />

              <a href='#reviews' class='app-preview__link'>
                28 Reviews
              </a>
            </div>
          </div>
        </div>
        <Button theme='primary' tag='a' className='app-preview__button'>
          Open app
        </Button>
      </Container>

      <div class='app-preview__gray'>
        <Container>
          <button data-id='prev' class='app-preview__arrow'>
            <Icon name='app-arrow-left' />
          </button>

          <div class='swiper'>
            <div class='swiper-wrapper'>
              {array(3).map(() =>
                [appPreview1, appPreview2, appPreview3, appPreview4].map((slide) => (
                  <div class='swiper-slide'>
                    <div data-fancybox='gallery' data-src={slide}>
                      <img src={slide} alt='' />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <button data-id='next' class='app-preview__arrow'>
            <Icon name='app-arrow-right' />
          </button>
        </Container>
      </div>
    </div>
  )
}

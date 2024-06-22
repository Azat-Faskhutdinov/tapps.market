import cn from 'classnames'

import platformsImage from './assets/platforms.svg'
import planetImage from './assets/planet.svg'
import warningImage from './assets/warning.svg'

interface props {
  className?: string
}
export const ReviewAside = (props: props) => {
  const { className } = props

  return (
    <div class={cn('review-aside', className)}>
      <div class='review-aside__header'>
        <div class='review-aside__item'>
          <img src={platformsImage} alt='' />
          <div class='review-aside__item-shell'>
            <p>Platforms</p>
            <p>Web</p>
          </div>
        </div>

        <div class='review-aside__item'>
          <img src={warningImage} alt='' />
          <div class='review-aside__item-shell'>
            <p>Interface languages</p>
            <p>English</p>
          </div>
        </div>
      </div>

      <div class='review-aside__item'>
        <img src={planetImage} alt='' />
        <div class='review-aside__item-shell'>
          <p>
            TON App is not responsible for any of the apps in the catalog. Using this app you take
            your own risks. Read our <a href='javascript:void(0)'>Disclaimer Terms</a> and 
            <a href='javascript:void(0)'>Privacy Policy</a>
          </p>
        </div>
      </div>

      <h3 class='review-aside__title'>Description</h3>

      <p>
        Удобное решение для тех, кто хочет платить за сотовую связь и другие услуги с помощью TON и
        не заморачиваться с биржами, обменниками и конвертацией.
      </p>
    </div>
  )
}

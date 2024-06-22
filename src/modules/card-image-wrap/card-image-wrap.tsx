import cn from 'classnames'

interface props {
  className?: string
  isGold?: boolean
  src: string
  count?: number
}
export const CardImageWrap = (props: props) => {
  const { className, src, isGold, count } = props

  const mod = {
    'card-image-wrap--golden': isGold,
    'card-image-wrap--no-count': !count
  }

  return (
    <div class={cn('card-image-wrap', mod, className)} data-count={count}>
      <img src={src} alt='' />
    </div>
  )
}

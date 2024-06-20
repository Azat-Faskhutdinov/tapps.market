import cn from 'classnames'

interface props {
  className?: string
  isScrollCompencate?: boolean
}
export const Gap = (props: props) => {
  const { className, isScrollCompencate } = props

  const mod = {
    'gap--scroll': isScrollCompencate
  }

  return <div class={cn('gap', mod, className)}></div>
}

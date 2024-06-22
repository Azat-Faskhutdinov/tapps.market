import cn from 'classnames'

interface props {
  className?: string
  count: number
  title: string
  desc: string
  isMediaDesc?: boolean
}
export const TitleHeader = (props: props) => {
  const { className, count, title, desc, isMediaDesc } = props

  return (
    <div class={cn('title-header', { 'title-header--media-desc': isMediaDesc }, className)}>
      <h2 data-count={count}>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

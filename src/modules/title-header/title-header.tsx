import cn from 'classnames'

interface props {
  className?: string
  count: number
  title: string
  desc: string
}
export const TitleHeader = (props: props) => {
  const { className, count, title, desc } = props

  return (
    <div class={cn('title-header', className)}>
      <h2 data-count={count}>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

import cn from 'classnames'

interface props {
  className?: string
  children?: any
}
export const Container = (props:props) => {
  const { className, children } = props

  return (
    <div class={cn('container', className)}>
      {children}
    </div>
  )
}


import cn from 'classnames'

type props = {
  children?: any
  className?: string
}

const UiScrollbar = ({ children, className, ...other }: props) => {
  return (
    <div class={cn('ui-scrollbar', className)} {...other}>
      {children}
    </div>
  )
}

export { UiScrollbar }

import cn from 'classnames'

interface props {
  className?: string
  tag?: string
  children?: any
  theme: 'primary' | 'ghost' | 'cancel'
}
export const Button = (props: props) => {
  const { className, tag, children, theme, ...others } = props

  const TagName = tag === 'a' ? 'a' : 'button'

  const mod = {
    'button--ghost': theme === 'ghost',
    'button--primary': theme === 'primary',
    'button--cancel': theme === 'cancel'
  }

  return (
    <TagName
      href={tag === 'a' ? 'javascript:void' : null}
      class={cn('button', mod, className)}
      {...others}
    >
      {children}
    </TagName>
  )
}

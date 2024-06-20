import cn from 'classnames'
import LogoImage from './assets/logo.svg'

interface props {
  className?: string
}
export const Logo = (props: props) => {
  const { className } = props

  return (
    <a href='/' class={cn('logo', className)}>
      <img src={LogoImage} alt='' />
    </a>
  )
}

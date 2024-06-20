import cn from 'classnames'
import { Icon } from '../icon/icon'
import { array } from '@/views/utils/array'

interface props {
  className?: string
  activeStars?: number
  emptyStars?: number
}
export const Stars = (props: props) => {
  const { className, activeStars = 4, emptyStars = 1 } = props

  return (
    <div class={cn('stars', className)}>
      {array(activeStars).map(() => (
        <Icon className='stars__star' name='star-fill' />
      ))}
      {array(emptyStars).map(() => (
        <Icon className='stars__star' name='star-empty' />
      ))}
    </div>
  )
}

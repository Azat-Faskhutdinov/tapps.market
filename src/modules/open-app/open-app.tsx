import cn from 'classnames'
import { Button } from '../button/button'

interface props {}
export const OpenApp = (props: props) => {
  const {} = props

  return (
    <div class={cn('open-app')}>
      <Button theme='primary' tag='a'>
        Open app
      </Button>
    </div>
  )
}

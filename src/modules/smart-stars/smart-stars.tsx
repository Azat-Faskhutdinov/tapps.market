import cn from 'classnames'

type props = {
  className?: string
}

export const SmartStars = (props: props) => {
  const { className } = props

  return (
    <select
      class={cn('smart-stars', className)}
      data-id='stars'
      data-id-static='stars'
      name='stars'
    >
      <option value='5' label='stars'></option>
      <option value='4' label='stars'></option>
      <option value='3' label='stars'></option>
      <option value='2' label='stars'></option>
      <option value='1' label='stars'></option>
    </select>
  )
}

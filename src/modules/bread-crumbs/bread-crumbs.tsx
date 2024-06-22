import cn from 'classnames'
import { Container } from '@/modules/container/container'

interface props {
  className?: string
  crumbs: Array<string>
}
export const BreadCrumbs = (props: props) => {
  const { className, crumbs } = props

  return (
    <Container>
      <div class={cn('bread-crumbs', className)}>
        {crumbs.map((link, index) => {
          const firstLink = index === 0 ? '/' : 'javascript:void(0)'
          const lastLink = index + 1 === crumbs.length - 1 && 'javascript:history.back()'
          const TagName = index + 1 === crumbs.length ? 'div' : 'a'
          return (
            <>
              {index > 0 && <p class='bread-crumbs__sep'></p>}
              <TagName href={firstLink || lastLink} class='bread-crumbs__link'>
                {link}
              </TagName>
            </>
          )
        })}
      </div>
    </Container>
  )
}

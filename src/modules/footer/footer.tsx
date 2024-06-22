import cn from 'classnames'
import { Container } from '../container/container'
import { footerNav } from './data-footer-navigation'

interface props {
  className?: string
}
export const Footer = (props: props) => {
  const { className } = props

  return (
    <footer class={cn('footer', className)}>
      <Container>
        <nav class='footer__nav'>
          {footerNav.map((link: { title: string; links: string[] }) => (
            <div class='footer__col'>
              <h3 class='footer__col-title'>{link.title}</h3>

              {link.links.map((a) => (
                <a href='javascript:void(0)'>{a}</a>
              ))}
            </div>
          ))}
          <p>© 2024 tapps.market</p>
        </nav>
      </Container>
    </footer>
  )
}

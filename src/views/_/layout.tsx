import { rev } from '@/views/utils/rev'
import { Preload } from '@/views/_/utils/preload'
import { Overlay } from '@/modules/overlay/overlay'

type props = {
  title?: string
  children?: JSXTE.ElementChildren
  isHeader?: boolean
}

const type = `<!DOCTYPE html>`

const Layout = ({ title, children, isHeader = true }: props) => {
  return (
    <>
      {type}
      <html lang='ru'>
        <head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='stylesheet' href={'./css/styles.css' + rev()} />
          <title>{title ?? ''}</title>
          <meta
            name='description'
            content='Одна из страниц проекта , предлагаем ознакомиться с программой'
          />
        </head>
        <body>
          {children}

          <script src={'./js/main.js' + rev()} />
        </body>
      </html>
    </>
  )
}

export { Layout }

import { routing } from '@/views/utils/routing'
import { ListMenu } from '@/views/pages'
import { Main } from '@/views/pages/main'

export const associatedUrl = [
  {
    placeholder: 'Главная страница',
    path: 'index',
    component: <ListMenu />
  },
  {
    placeholder: 'Пример страницы',
    path: 'main',
    component: <Main />
  },
]

export default routing(associatedUrl)

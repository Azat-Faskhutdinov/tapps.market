import { routing } from '@/views/utils/routing'
import { ListMenu } from '@/views/pages'
import { Main } from '@/views/pages/main'
import { CategoryCatalog } from './pages/category-catalog'
import { AppDetail } from './pages/app-detail'
import { AppDetailAuthorised } from './pages/app-detail-authorised'

export const associatedUrl = [
  {
    placeholder: 'Главная страница',
    path: 'index',
    component: <ListMenu />
  },
  {
    placeholder: 'Главная',
    path: 'main',
    component: <Main />
  },
  {
    placeholder: 'Каталог категории',
    path: 'categories-catalog',
    component: <CategoryCatalog />
  },
  {
    placeholder: 'Страница приложения',
    path: 'app-detail',
    component: <AppDetail />
  },
  {
    placeholder: 'Страница приложения - авторизованный пользователь',
    path: 'app-detail-authorised',
    component: <AppDetailAuthorised />
  }
]

export default routing(associatedUrl)

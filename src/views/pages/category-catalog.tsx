import { Header } from '@/modules/header/header'
import { Layout } from '@/views/_/layout'
import { Footer } from '@/modules/footer/footer'
import { BreadCrumbs } from '@/modules/bread-crumbs/bread-crumbs'
import { CategoryDetail } from '@/modules/category-detail/category-detail'

const crubs = ['Home', 'Shopping']

export const CategoryCatalog = () => {
  return (
    <Layout title='Категория'>
      <Header />
      <BreadCrumbs crumbs={crubs} />
      <CategoryDetail />
      <Footer />
    </Layout>
  )
}

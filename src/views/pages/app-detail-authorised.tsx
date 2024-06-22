import { Header } from '@/modules/header/header'
import { Layout } from '@/views/_/layout'
import { Footer } from '@/modules/footer/footer'
import { BreadCrumbs } from '@/modules/bread-crumbs/bread-crumbs'
import { AppPreview } from '@/modules/app-preview/app-preview'
import { Reviews } from '@/modules/reviews/reviews'
import { Gap } from '@/modules/gap/gap'
import { OpenApp } from '@/modules/open-app/open-app'
import { SuccessMessage } from '@/modules/success-message/success-message'

const crubs = ['Home', 'Shopping', 'Moneton']

export const AppDetailAuthorised = () => {
  return (
    <Layout title='Приложение'>
      <Header />
      <BreadCrumbs crumbs={crubs} />
      <AppPreview />
      <Gap />
      <Reviews isUserAuth />
      <Gap />
      <Footer />
      <OpenApp />
      <SuccessMessage />
    </Layout>
  )
}

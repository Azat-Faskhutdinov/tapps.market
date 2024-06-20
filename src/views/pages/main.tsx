import { Gap } from '@/modules/gap/gap'
import { Header } from '@/modules/header/header'
import { Listing } from '@/modules/listing/listing'
import { Navigation } from '@/modules/navigation/navigation'
import { Preview } from '@/modules/preview/preview'
import { Layout } from '@/views/_/layout'
import { listingCards, mainListCards } from '../data/data-main-listing'
import { Banner } from '@/modules/banner/banner'

export const Main = () => {
  return (
    <Layout>
      <Header />
      <Preview />
      <Navigation />
      <Gap />
      {mainListCards.map((sect) => (
        <>
          <Listing
            title={sect.title}
            desc={sect.desc}
            count={sect.count}
            listingCards={listingCards}
          />
          <Gap isScrollCompencate />
        </>
      ))}
      <Banner />
    </Layout>
  )
}

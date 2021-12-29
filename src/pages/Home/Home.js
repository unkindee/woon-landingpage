import PageMetaTitle from '../../components/PageMetaTitle'
import MainLayout from '../../partials/MainLayout'
import Hero from './sections/Hero'
import Construction from './sections/Construction'
import Articles from './sections/Articles'

const Home = () => (
  <MainLayout>
    <PageMetaTitle title='Home' />
    <Hero />
    <Construction />
    <Articles />
  </MainLayout>
)

export default Home

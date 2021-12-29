import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const MainLayout = (props) => (
  <>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </>
)

export default MainLayout

MainLayout.propTypes = {
  children: PropTypes.array,
}

MainLayout.default = {
  children: [],
}

import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import { sizes } from '../constants'

const StyledMain = styled.main`
  padding-top: ${sizes.headerHeight}px;
`

const MainLayout = (props) => (
  <>
    <Header />
    <StyledMain>
      {props.children}
    </StyledMain>
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

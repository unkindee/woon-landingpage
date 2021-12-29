import styled from 'styled-components'
import PropTypes from 'prop-types'
import { breakPoints, mainColors } from '../constants'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${mainColors.iconGray};
  font-size: 20px;
  background: ${mainColors.white};
  padding: 36px 43px;
  flex: 1;

  @media (max-width: ${breakPoints.sm}) {
    padding: 9px 15px;
    font-size: 15px;
  }

  div:first-child {
    margin-bottom: 35px;
    max-width: 65px;
    height: 65px;

    @media (max-width: ${breakPoints.sm}) {
      display: flex;
      height: 40px;
      max-width: 40px;
    }
  }

  div:last-child {
    @media (max-width: ${breakPoints.sm}) {
      text-align: center;
    }
  }
`

const CustomIcon = ({ icon, text }) => (
  <Wrapper>
    <div>{icon}</div>
    <div>{text}</div>
  </Wrapper>
)


export default CustomIcon

CustomIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
}

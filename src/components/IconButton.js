import styled from 'styled-components'
import PropTypes from 'prop-types'
import { mainColors } from '../constants'

const StyledButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  width: 144px;
  height: 40px;
  border-radius: 40px;
  padding-left: 15px;
  justify-content: flex-start;
  color: ${mainColors.white};
  font-size: 18px;
  background: ${mainColors.neonBlue};

  span {
    margin-left: 8px;
  }
`

const IconButton = ({ icon, text }) => (
  <StyledButton>
    {icon && icon}
    <span>{text}</span>
  </StyledButton>
)

export default IconButton

IconButton.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string.isRequired,
}

IconButton.default = {
  icon: null
}

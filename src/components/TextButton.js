import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 40px;
  padding: 0 25px;
  justify-content: center;
  color: ${({ color }) => color};
  font-size: 18px;
  background: ${({ background }) => background};
  border: ${({ border }) => border};
`

const TextButton = ({ text, color, background, border }) => (
  <StyledButton
    color={color}
    background={background}
    border={border}
  >
    <span>{text}</span>
  </StyledButton>
)

export default TextButton

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired
}

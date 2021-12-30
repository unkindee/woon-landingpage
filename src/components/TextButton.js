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

  &:hover {
    color: ${({ colorHover }) => colorHover};
    border: 1px solid ${({ borderHoover }) => borderHoover};
    background: ${({ backgroundHover }) => backgroundHover};
  }
`

const TextButton = ({
  text,
  color,
  background,
  border,
  colorHover,
  backgroundHover,
  borderHoover
}) => (
  <StyledButton
    color={color}
    background={background}
    border={border}
    colorHover={colorHover}
    backgroundHover={backgroundHover}
    borderHoover={borderHoover}
  >
    <span>{text}</span>
  </StyledButton>
)

export default TextButton

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  backgroundHover: PropTypes.string.isRequired,
  colorHover: PropTypes.string.isRequired,
  borderHover: PropTypes.string.isRequired
}

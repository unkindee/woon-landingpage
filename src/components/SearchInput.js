
import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { mainColors } from '../constants'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 25px;

  span {
    position: absolute;
    right: 15px;
    top: calc(50% - 14px);
  }

  input {
    height: 40px;
    border-radius: 40px;
    padding-left: 15px;
    color: ${mainColors.menuGray};
    font-size: 18px;
    border: 1px solid ${mainColors.grayBorder};
    background: #F3F3F3;

    &::placeholder {
      color: #454545;
      font-size: 16px;
    }

    &:focus,
    &:active {
      border: 1px solid ${mainColors.neonBlue};
      outline: none;
    }
  }
`

const SearchInput = ({ icon, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <Wrapper>
      {icon && <span>{icon}</span>}
      <input
        type='text'
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Wrapper>
  )
}

export default SearchInput

SearchInput.propTypes = {
  icon: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
}

SearchInput.default = {
  icon: null
}

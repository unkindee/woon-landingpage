import styled from 'styled-components'
import PropTypes from 'prop-types'
import { mainColors } from '../constants'

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  padding: 16px;
  text-align: left;
  border-radius: 10px;
  border: 1px solid ${mainColors.grayBorder};

  span {
    font-weight: bold;
  }

  h4 {
    font-size: 24px;
    font-weight: 400 !important;
    margin-top: 18px;
    margin-bottom: 28px !important;
  }

  p,
  span {
    line-height: 30px;
    font-size: 18px;
    color: ${mainColors.iconGray} !important;
  }

  a {
    text-decoration: none;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 25px;

  img {
    scale: 1.1;
    height: 306px;
    width: 100%;
    object-fit: cover;
  }
`

const ArticlePreview = ({ icon, date, title, paragraph }) => (
  <Wrapper>
    <a href='#'>
      <ImageWrapper>
        <img src={icon} alt='Article' />
      </ImageWrapper>
      <span>{date}</span>
      <h4>{title}</h4>
      <p>{paragraph}</p>
    </a>
  </Wrapper >
)

export default ArticlePreview

ArticlePreview.propTypes = {
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}

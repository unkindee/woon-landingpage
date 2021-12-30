import { useTranslation, Trans } from 'react-i18next'
import styled from 'styled-components'
import Page from '../components/Page'
import { sharedH4, sharedParagraph } from '../components/sharedStyles'
import { breakPoints, mainColors } from '../constants'

const StyledFooter = styled.footer`
  background: ${mainColors.darkBlue};
  color: ${mainColors.white};
  padding-top: 95px;
  padding-bottom: 100px;

  a {
    color: ${mainColors.white};
    font-size: 18px;
  }

  h4 {
    ${sharedH4}
  }

  p {
    ${sharedParagraph}
    padding-top: 40px;
    padding-bottom: 10px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 0 0 40%;

  @media (max-width: ${breakPoints.sm}) {
    flex: 0 0 100%;
  } 
`

const Right = styled.div`
  flex: 0 0 32%;

  @media (max-width: ${breakPoints.sm}) {
    flex: 0 0 100%;
  }

  p {
    margin: 0;
    margin-top: 30px;
    padding: 0;
  }
`

const Footer = () => {
  const { t } = useTranslation()

  return (
    <StyledFooter>
      <Page>
        <Wrapper>
          <Left>
            <h4><Trans>{t('footer.left.title')}</Trans></h4>
            <p>{t('footer.left.paragraph')}</p>
            <a href='/'>{t('footer.left.button')}</a>
          </Left>
          <Right>
            <h4>{t('footer.right.title')}</h4>
            <p><Trans>{t('footer.right.address')}</Trans></p>
            <p><Trans>{t('footer.right.open')}</Trans></p>
            <p><Trans>{t('footer.right.telephone')}</Trans></p>
            <p><Trans>{t('footer.right.email')}</Trans></p>
          </Right>
        </Wrapper>
      </Page>
    </StyledFooter>
  )
}

export default Footer

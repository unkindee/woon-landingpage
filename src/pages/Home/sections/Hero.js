import styled from 'styled-components'
import { breakPoints, mainColors } from '../../../constants'
import Page from '../../../components/Page'
import CustomIcon from '../../../components/CustomIcon'

import heroImageSmall from '../../../assets/images/hero.png'
import heroImageLarge from '../../../assets/images/hero@2x.png'
import { ReactComponent as Home } from '../../../assets/icons/home.svg'
import { ReactComponent as Chat } from '../../../assets/icons/chat.svg'
import { ReactComponent as Wrench } from '../../../assets/icons/wrench.svg'
import { ReactComponent as Hand } from '../../../assets/icons/hand.svg'

const StyledSection = styled.section`
  background: -webkit-image-set( url(${heroImageSmall}) 1x, url(${heroImageLarge}) 2x );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  .col {
    position: relative;
  }
`

const Wrapper = styled.div`
  position: absolute;
  top: -15px;
  right: 285px;
  left: 285px;

  @media (max-width: ${breakPoints.sm}) {
    top: -15px;
    right: 12px;
    left: 12px;
  }
`

const Title = styled.h1`
  font-size: 62px;
  color: ${mainColors.white};
  font-weight: 700;
  text-shadow: 0px 3px 6px ${mainColors.shadow};
  margin-bottom: 25px;

  @media (max-width: ${breakPoints.sm}) {
    font-size: 35px;
  }
`

const IconsWrapper = styled.div`
  border: 1px solid ${mainColors.lightBorder};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 3px 6px ${mainColors.shadow};
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${mainColors.lightBorder};
  grid-gap: 1px;
  background-color: ${mainColors.lightBorder};
`

const items = [
  {
    icon: <Wrench />,
    text: 'Reparatie melden'
  },
  {
    icon: <Hand />,
    text: 'Huur betalen'
  },
  {
    icon: <Home />,
    text: 'Woning zoeken'
  },
  {
    icon: <Chat />,
    text: 'Overlast melden'
  }
]

const Hero = () => {
  const icons = items.map(item => (
    <CustomIcon
      icon={item.icon}
      text={item.text}
      key={item.text}
    />
  ))

  return (
    <StyledSection>
      <Page>
        <Wrapper>
          <Title>
            Waarmee kunnen <br />
            we je helpen?
          </Title>
          <IconsWrapper>
            {icons}
          </IconsWrapper>
        </Wrapper>
      </Page>
    </StyledSection>
  )
}

export default Hero

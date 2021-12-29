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

const Footer = () => (
  <StyledFooter>
    <Page>
      <Wrapper>
        <Left>
          <h4>
            Wij zijn Woonplezier. <br />
            We hebben verstand van huizen. <br />
            En hart voor mensen.
          </h4>
          <p>
            Wij zijn een woningcorporatie met ongeveer 8.000 woningen in Zaandam en omgeving. We zorgen voor goede en betaalbare woningen in een prettige buurt voor huishoudens met een smalle beurs. Kwetsbare mensen kunnen op ons rekenen, net als starters, gezinnen en alleenwonenden.
          </p>
          <a href='#'>Meer over Woonplezier</a>
        </Left>
        <Right>
          <h4>
            Contact
          </h4>
          <p>
            <b>Bezoekadres:</b> <br />
            Straatnaam 00 <br />
            0000 XX Plaatsnaam
          </p>
          <p>
            <b>Openingstijden:</b> <br />
            Maandag t/m vrijdag van 9.00 tot 17.00 <br />
            uur
          </p>
          <p>
            <b>Telefoon:</b> <br />
            000 - 000 00 00
          </p>
          <p>
            <b>Email:</b> <br />
            info@woonplezier.nu
          </p>
        </Right>
      </Wrapper>
    </Page>
  </StyledFooter>
)

export default Footer

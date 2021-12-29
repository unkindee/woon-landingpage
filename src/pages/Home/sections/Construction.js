import styled from 'styled-components'
import { breakPoints, mainColors } from '../../../constants'
import Page from '../../../components/Page'

import houseSmall from '../../../assets/images/house.png'
import houseLarge from '../../../assets/images/house@2x.png'
import { sharedH4 } from '../../../components/sharedStyles'

const StyledSection = styled.section`
  background-color: rgba(10,134,244,0.071);
  display: flex;
  padding-top: 150px;
  padding-bottom: 48px;
  position: relative;

  h3 {
    color: ${mainColors.iconGray};
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  h4 {
    ${sharedH4}
  }

  p, h4 {
    color: ${mainColors.darkBlue};
  }

  p {
    font-size: 20px;
    line-height: 32px;
    text-align: left;
    padding: 24px 0;
    margin: 0;
  }

  a {
    font-size: 18px;
    color: ${mainColors.neonBlue};
  }
`

const PageContainer = styled.div`
  margin: 0 120px;

  @media (max-width: ${breakPoints.xs}) {
    margin: 0;
  }
`

const Wrapper = styled.div`
  display: flex;

  @media (max-width: ${breakPoints.sm}) {
    flex-wrap: wrap;
  }
`

const Left = styled.div`
  flex: 0 0 49%;
  padding-right: 80px;

  @media (max-width: ${breakPoints.sm}) {
    flex: 0 0 100%;
    padding: 0;
  }
`

const Right = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: ${breakPoints.sm}) {
    flex: 0 0 100%;
    overflow: hidden;
  }

  img {
    position: absolute;
    border-radius: 5px;
    width: 108%;
    top: 0;

    @media (max-width: ${breakPoints.sm}) {
      position: relative;
      margin-top: 15px;
    }
  }
`

const Construction = () => (
  <StyledSection>
    <Page>
      <PageContainer>
        <h3>NIEUWBOUW</h3>
        <Wrapper>
          <Left>
            <h4>Binnenkort in de verkoop</h4>
            <p>
              Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
            </p>
            <a href='#'>
              Bekijk dit project
            </a>
          </Left>
          <Right>
            <img src={houseSmall} srcSet={`${houseSmall} 1x, ${houseLarge} 2x`} alt='house' />
          </Right>
        </Wrapper>
      </PageContainer>
    </Page>
  </StyledSection>
)

export default Construction

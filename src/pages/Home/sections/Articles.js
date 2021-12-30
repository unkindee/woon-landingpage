import styled from 'styled-components'
import { breakPoints, mainColors } from '../../../constants'
import Page from '../../../components/Page'
import ArticlePreview from '../../../components/ArticlePreview'

import article_1 from '../../../assets/images/article_1.png'
import article_2 from '../../../assets/images/article_2.png'
import article_3 from '../../../assets/images/article_3.png'
import TextButton from '../../../components/TextButton'
import { sharedH4 } from '../../../components/sharedStyles'

const items = [
  {
    image: article_1,
    date: '03-02-2021',
    title: 'Bouw 55 sociale huurappartementen gestart',
    paragraph: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante'
  },
  {
    image: article_2,
    date: '15-02-2021',
    title: 'Cultuurhistorische eisen belemmeren nieuwbouw',
    paragraph: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis '
  },
  {
    image: article_3,
    date: '20-02-2021',
    title: 'Bewonersbijeenkomst op donderdag 9 maart',
    paragraph: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio '
  }
]

const StyledSection = styled.section`
  display: flex;
  padding-top: 130px;
  position: relative;

  h4 {
    ${sharedH4}
    font-weight: bold;
    margin-bottom: 55px;
  }

  p, h4 {
    color: ${mainColors.darkBlue};
  }
`

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;

  @media (max-width: ${breakPoints.sm}) {
    grid-template-columns: auto;
  } 

  article {
    min-width: 300px;
    width: 100%;
  }
`

const ButtonWrapper = styled.div`
  margin: 80px 0;

  button {
    margin: 0 auto;
  }
`

const Articles = () => {
  const articles = items.map(item => (
    <ArticlePreview
      icon={item.image}
      date={item.date}
      title={item.title}
      paragraph={item.paragraph}
      key={item.title}
    />
  ))

  return (
    <StyledSection>
      <Page>
        <h4>Actueel</h4>
        <ArticlesWrapper>
          {articles}
        </ArticlesWrapper>
        <ButtonWrapper>
          <TextButton
            text='Meer nieuwsberichten'
            color={mainColors.darkBlue}
            colorHover={mainColors.green}
            background='transparent'
            backgroundHover='rgba(32, 132, 125, .1)'
            border={`1px solid ${mainColors.neonBlue}`}
            borderHover={`1px solid ${mainColors.green}`}
          />
        </ButtonWrapper>
      </Page>
    </StyledSection>
  )
}

export default Articles

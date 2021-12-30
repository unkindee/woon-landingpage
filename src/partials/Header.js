import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { breakPoints, mainColors, sizes, urls } from '../constants'
import Page from '../components/Page'
import IconButton from '../components/IconButton'
import SearchInput from '../components/SearchInput'
import LanguageButtons from '../components/LanguageButtons'

import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Search } from '../assets/icons/search.svg'

const mainLinks = [
  {
    to: urls.ik_huur,
    title: 'mainMenu.ik_huur'
  },
  {
    to: urls.ik_zoek,
    title: 'mainMenu.ik_zoek'
  },
  {
    to: urls.projecten,
    title: 'mainMenu.projecten'
  },
  {
    to: urls.contact,
    title: 'mainMenu.contact'
  }
]

const StyledHeader = styled.header`
  background: ${mainColors.white};
  box-shadow: 0px 3px 6px ${mainColors.shadow};
  position: fixed;
  width: 100%;
  z-index: 2;
`

const StyledNavBar = styled(Navbar)`
  height: ${sizes.headerHeight}px;
  position: relative;

  #basic-navbar-nav {
    justify-content: space-between;
    background: ${mainColors.white};

    @media (max-width: ${breakPoints.sm}) {
      box-shadow: 0px 3px 6px ${mainColors.shadow};
      padding: 12px 0;
      position: absolute;
      top:  ${sizes.headerHeight}px;
      left: -12px;
      right: -12px;
    }
  }
`

const StyledNavLink = styled(NavLink)`
  color: ${mainColors.menuGray};
  margin-right: 35px;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: ${mainColors.neonBlue};
  }
`

const StyledNav = styled(Nav)`
  margin-left: 65px;
`

const Header = () => {
  const { t } = useTranslation()
  const links = mainLinks.map(link => {
    return (
      <StyledNavLink key={t(link.title)} to={link.to} title={t(link.title)}>{t(link.title)}</StyledNavLink>
    )
  })

  return (
    <StyledHeader>
      <Page>
        <StyledNavBar expand='lg'>
          <a href="/">
            <Logo />
          </a>
          <LanguageButtons />
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <StyledNav>
              {links}
            </StyledNav>
            <StyledNav>
              <SearchInput
                icon={<Search />}
                placeholder={t('search.placeholder')}
              />
              <IconButton
                icon={<PersonOutlineIcon />}
                text={t('buttons.login')}
              />
            </StyledNav>
          </Navbar.Collapse>
        </StyledNavBar>
      </Page>
    </StyledHeader>
  )
}

export default Header

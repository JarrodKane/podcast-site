import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import dots from '../images/dots.png'

const HeaderCon = styled.header`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.18) 5.83%,
      rgba(34, 34, 34, 0.78) 92.65%
    ),
    linear-gradient(0deg, rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.4)),
    url(${dots}), #910000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`
const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 2rem 0 3rem;
`
const Title = styled.div`
  padding: 1.45rem 3.0875rem;
`
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const MenuLink = styled(props => <Link {...props} />)`
  color: white;
  padding-right: 1.5rem;
  font-size: 1.3rem;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
`

//  margin: 0 auto;
// padding: 1.45rem 1.0875rem;
const Header = ({ siteTitle }) => (
  <HeaderCon>
    <Title>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Title>
    <LinkSection>
      <Menu>
        <MenuLink to="/about">ABOUT</MenuLink>
        <MenuLink to="/contact">CONTACT</MenuLink>
      </Menu>
      <div>Socials</div>
    </LinkSection>
  </HeaderCon>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

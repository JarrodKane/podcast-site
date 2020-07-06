import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import dots from '../images/dots.png'
import spotify from '../images/Spotify_Logo_RGB_Green.png'
import applePodcasts from '../images/US_UK_Apple_Podcasts_Listen_Color_Lockup_RGB_Wht_Type.png'
import youtube from '../images/youtube_social_icon_red.png'

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
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
`
const MenuLink = styled(props => <Link {...props} />)`
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
`
const Image = styled.img`
  padding: 0.5em 1em;
  height: 2.5em;
  margin: 0;
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
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/playlist?list=PLZvq_TDBtARrBlLzDOFgm_ciU0akessl4"
        >
          <Image src={youtube} alt="Youtube logo" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/show/3Gk38MEFuJmVnt3rYzOopW?si=VFqP9FMUR0ePKTCvt-F_Qw"
        >
          <Image src={spotify} alt="Spotify logo" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://podcasts.apple.com/podcast/end-of-the-reel/id1466457494"
        >
          <Image src={applePodcasts} alt="Apple podcasts logo" />
        </a>
      </div>
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

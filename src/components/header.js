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
`

const Header = ({ siteTitle }) => (
  <HeaderCon>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
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
    </div>
  </HeaderCon>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

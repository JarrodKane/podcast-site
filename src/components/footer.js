import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

const Container = styled.footer`
  margin: 2rem auto;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: pink;
`

const Player = ({ siteTitle, Socials }) => (
  <Container>
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
    <div>Social</div>
    <div>Social</div>
  </Container>
)

export default Player

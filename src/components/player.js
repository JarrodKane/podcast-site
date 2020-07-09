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

const Player = () => (
  <Container>
    <div></div>
    <div>Social</div>
    <div>Social</div>
  </Container>
)

export default Player

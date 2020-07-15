import { Link } from 'gatsby'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'

const Container = styled.footer`
  margin: 2rem auto;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: pink;
`

const Player = ({ url }) => {
  console.log('This is the URL ' + url)
  console.log('Called')

  return (
    <Container>
      <div>
        <audio key={url} controls style={{ width: '100%' }}>
          <source src={url} type="audio/mpeg" />
        </audio>
      </div>
    </Container>
  )
}

export default Player

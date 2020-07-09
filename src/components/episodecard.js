import React from 'react'
import styled from 'styled-components'

import EpisodeCardHeader from './episodeCardHeader'

const Card = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #8c8c8c;
  box-sizing: border-box;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
const EpMain = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`
const EpContent = styled.div`
  padding: 0.5rem;
  @media (min-width: 600px) {
    width: 50%;
  }
`

const EpisodeCard = () => (
  <Card>
    <EpisodeCardHeader />
    <EpMain>
      <EpContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend
        at risus et congue. Donec consectetur lorem eget nunc aliquam, eget
        bibendum metus posuere. Donec vulputate imperdiet hendrerit. Maecenas
        malesuada vestibulum ornare. Etiam facilisis nibh in neque eleifend, eu
        aliquet neque cursus. Quisque pretium interdum turpis, non imperdiet
        tellus molestie ac. Vivamus tempor ipsum enim, quis mattis dolor
        faucibus non. Vivamus eget ligula a tellus finibus ultricies ut nec
        felis. Cras nec justo arcu. Ut pharetra scelerisque ultricies. Maecenas
        mattis nec diam id auctor.{' '}
      </EpContent>
      <EpContent>Card Socials and icon</EpContent>
    </EpMain>
  </Card>
)

export default EpisodeCard

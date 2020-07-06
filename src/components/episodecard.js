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

const EpisodeCard = () => (
  <Card>
    <EpisodeCardHeader />
    <div>
      <div>Card Text</div>
      <div>Card Socials and icon</div>
    </div>
  </Card>
)

export default EpisodeCard

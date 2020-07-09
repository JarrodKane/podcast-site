import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown/with-html'

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

const EpisodeCard = ({ Episode }) => {
  const { title, content, link } = Episode

  return (
    <Card>
      <EpisodeCardHeader EpTitle={title} />
      <EpMain>
        <EpContent>
          <ReactMarkdown source={content} escapeHtml={false} />
        </EpContent>
        <EpContent>Card Socials and icon</EpContent>
      </EpMain>
    </Card>
  )
}

export default EpisodeCard

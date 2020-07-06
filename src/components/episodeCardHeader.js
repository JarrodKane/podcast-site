import React from 'react'
import styled from 'styled-components'

const HeaderCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Metahead = styled.div`
  margin-left: 15%;
  display: flex;
  align-self: flex-start;
`
const Line = styled.div`
  width: 75%;
  border-bottom: 2px solid #aeaeae;
  margin: 1rem;
`

const EpisodeCardHeader = () => (
  <HeaderCon>
    <Metahead>
      <div>Play Button</div>
      <div>Title</div>
    </Metahead>
    <Line />
  </HeaderCon>
)

export default EpisodeCardHeader

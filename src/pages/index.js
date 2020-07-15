import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import EpisodeCard from '../components/episodecard'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Player from '../components/player'
import Playlist from '../components/playlist'

// Query to get the podcast feed
const PODCAST_FEED = graphql`
  query MyQuery {
    allFeedPodcast {
      nodes {
        enclosure {
          length
          url
        }
        title
        content
      }
    }
    allFeedPodcastMeta {
      edges {
        node {
          feedUrl
          description
          image {
            url
          }
        }
      }
    }
  }
`

const MainWrap = styled.div`
  display: flex;
  flex-direction: row;
`

const IndexPage = () => {
  const [episodeNum, setEpisodeNum] = useState(0)
  const [episodePlaying, setEpisodePlaying] = useState(0)
  const data = useStaticQuery(PODCAST_FEED)
  const PodcastFeed = data.allFeedPodcast.nodes
  console.log(PodcastFeed)

  //  const changeEpisode = () => {
  //    setEpisodeNum(episodeNum + 1)
  //  }

  return (
    <Layout>
      <SEO title="End Of The Reel" />
      <MainWrap>
        <Playlist />
        <button onClick={() => setEpisodeNum(episodeNum + 1)}>
          {episodeNum}
        </button>
        <EpisodeCard Episode={PodcastFeed[episodeNum]} />
      </MainWrap>
      <Player url={PodcastFeed[episodeNum].enclosure.url} />
    </Layout>
  )
}
export default IndexPage

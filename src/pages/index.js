import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import EpisodeCard from '../components/episodecard'
import Layout from '../components/layout'
import SEO from '../components/seo'

// Query to get the podcast feed
const PODCAST_FEED = graphql`
  query MyQuery {
    allFeedPodcast {
      nodes {
        title
        link
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
      <div>
        <button onClick={() => setEpisodeNum(episodeNum + 1)}>
          {episodeNum}
        </button>
      </div>
      <EpisodeCard Episode={PodcastFeed[episodeNum]} />
    </Layout>
  )
}
export default IndexPage

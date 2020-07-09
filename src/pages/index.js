import React from 'react'
import { Link } from 'gatsby'

import EpisodeCard from '../components/episodecard'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="End Of The Reel" />
    <EpisodeCard />
    <h1>End Of The Reel</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about/">About</Link> <br />
    <Link to="/contact/">Contact</Link>
  </Layout>
)
export default IndexPage

// Query to grab the site in
/*
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
*/

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import styled from 'styled-components'
import './layout.css'
import '../styles/global.css'

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const PODCAST_META_QUERY = graphql`
  query PodcastMeta {
    allFeedPodcastMeta {
      edges {
        node {
          feedUrl
          title
          image {
            url
          }
        }
      }
    }
  }
`
const Layout = ({ children }) => {
  const data = useStaticQuery(PODCAST_META_QUERY)

  //  console.log(data)
  return (
    <LayoutWrapper>
      <Header siteTitle={data.allFeedPodcastMeta.edges[0].node.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

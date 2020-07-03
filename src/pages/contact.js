import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Contact us</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default ContactPage

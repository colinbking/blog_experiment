import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="About me">
    <SEO title="About" keywords ={['gatsby', 'application', 'react']}/>
    <h1>About me</h1>
  </Layout>
)

export default AboutPage

import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTItle = "Oops, something went wrong">
    <SEO title="404: Not found" />
    <Link className = "btn btn-primary text-uppercase" to={'/'}> Go home.</Link>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

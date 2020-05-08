/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import '../styles/index.scss'
import {Row, Col, Card, CardTitle, CardBody, Form, FormGroup, Input} from 'reactstrap'
import Sidebar from"./Sidebar"
import Mailform from "./Mailform"

const AboutLayout = ({ children, pageTitle }) => { //props.pageTitle
  const data = useStaticQuery(graphql`
    query SiteTitle2Query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    {/* <script src="https://kit.fontawesome.com/03300d180a.js" crossOrigin="anonymous"></script> */}
     <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id = "content">
              <h1>{pageTitle}</h1>
              <Row>
                      <Col md="12"> {children} </Col>
              </Row>
              <Row>
                      <Col md="12">
                      <Mailform/>
                      </Col>
              </Row>
      </div>
      <Footer/>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </>
  )
}

AboutLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AboutLayout

import React from "react"
import { graphql, StaticQuery } from 'gatsby'
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import Sidebar from "../components/Sidebar"

import { Row, Col } from 'reactstrap';




const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords ={['gatsby', 'application', 'react']}/>
    <h1>Home Page</h1>
    <Row>
            <Col md = "9">
                <StaticQuery query = {indexQuery} render={data =>{
                return (
                        <div>
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                                <Post 
                                key={node.id}
                                title = {node.frontmatter.title}
                                author={node.frontmatter.author}
                                slug={node.fields.slug}
                                date={node.frontmatter.date}
                                body = {node.excerpt}
                                fluid={node.frontmatter.image.childImageSharp.fluid}
                                tags={node.frontmatter.tags}/> 
                                
                        ))}
                        </div>
                )
                        }}/>
            </Col>
            <Col md = "3">
                    <Sidebar/>
                        
            </Col>
    </Row>
  </Layout>
);

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
          title
          date(formatString: "MMM Do YYYY")
          author
          tags
          image{
                  childImageSharp{
                          fluid(maxWidth:600){
                                  ...GatsbyImageSharpFluid
                          }
                  }
          }
        }
        fields {
                slug
        }
        excerpt
      }
     }
    }
  }
  `


export default IndexPage

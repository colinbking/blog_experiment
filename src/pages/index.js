import React from "react"
import { graphql, StaticQuery } from 'gatsby'
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import Sidebar from "../components/Sidebar"
import PaginationLinks from '../components/PaginationLinks'
import { Row, Col } from 'reactstrap';





const IndexPage = () => {
  const postsPerPage = 3;
  let numberOfPages;
  return (
  <Layout pageTitle="thesunnysideup">
    <SEO title="Home" keywords ={['gatsby', 'application', 'react']}/>
                <StaticQuery query = {indexQuery} render={data =>{
                numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
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


                                <PaginationLink/>
                        {/* TEMPORARY PAGINATION FIX*/}
                        
                        {/* Always in page 1 */}
                        <Pagination aria-label="Page navigation example">
                        {
                                <PaginationItem disabled>
                                        <PaginationLink previous href=""/>
                                </PaginationItem>
                        }

                        {
                       <PaginationItem active key={`page-number${1}`}>
                                         {/* return home or the page link if page is valid */}
                                        <PaginationLink href={`/${''}`}> 
                                                {1}
                                        </PaginationLink>
                        </PaginationItem>
                        }

                        {
                        <PaginationItem key={`page-number${2}`}>
                        {/* return home or the page link if page is valid */}
                       <        PaginationLink href={`/${'page/2'}`}> 
                                        {2}
                                </PaginationLink>
                        </PaginationItem>
                        }

                        {
                        <PaginationItem key={`page-number${3}`}>
                        {/* return home or the page link if page is valid */}
                                <PaginationLink href={`/${'page/3'}`}> 
                                        {3}
                                </PaginationLink>
                        </PaginationItem>
                        }

                        {
                                <PaginationItem>
                                        <PaginationLink next href={`/${'page/3'}`}></PaginationLink>
                                </PaginationItem>
                                }
                </Pagination>
                        </div>
                )
        }}/>
        
  </Layout>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {show: {eq: true}}}
        limit: 3) {
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

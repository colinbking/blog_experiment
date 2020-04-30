import React from 'react'
import Layout from '../components/layout'
import Post from '../components/Post'
import { graphql } from 'gatsby'

const postList = (props) => {
        const posts = props.data.allMarkdownRemark.edges
        const { currentPage } = props.pageContext
        return(
                <Layout pageTitle={`Page: ${currentPage}`}>
                        {posts.map(({node}) => (
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
                </Layout>


        )

}

export const postListQuery = graphql`
        query postListQuery($skip: Int!, $limit: Int!){
                allMarkdownRemark(
                        sort: { fields : [frontmatter___date], order: DESC}
                        filter: {frontmatter: {show: {eq: true}}}
                        limit: $limit
                        skip: $skip
                ){
                        edges{
                                node {
                                        id
                                        frontmatter{
                                                title
                                                date
                                                author
                                                tags
                                                image{
                                                        childImageSharp {
                                                                fluid(maxWidth:650, maxHeight: 371) {
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

export default postList
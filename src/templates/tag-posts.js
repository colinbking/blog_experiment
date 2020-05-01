import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Post from '../components/Post'


const tagPosts = ({ data, pageContext}) => {
        const { tag } = pageContext;
        const { totalCount } = data.allMarkdownRemark;
        // "1 post tagged with tag" or " "n posts tagged with tag"
        const pageHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;
        return (
                <Layout pageTitle={pageHeader}>
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
                </Layout>
        )

}

export const tagQuery = graphql`
        query($tag: String!){
                allMarkdownRemark(
                        sort: { fields: [frontmatter___date], order: DESC}
                        filter: { frontmatter: { tags: { in: [$tag]}}}
                ){
                        totalCount
                        edges{
                                node{
                                        id
                                        frontmatter{
                                                title
                                                date(formatString: "MMMM Do YYYY")
                                                author
                                                tags
                                                image{
                                                        childImageSharp{
                                                                fluid(maxWidth: 650, maxHeight: 371){
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
export default tagPosts
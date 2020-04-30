import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Badge, Card, CardBody, CardSubtitle, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'
import { DiscussionEmbed } from 'disqus-react'


const SinglePost = ({ data, pageContext }) => {
        const post = data.markdownRemark.frontmatter
        const baseUrl = 'https://thesunnysideup.net/'

        const disqusShortname = 'thesunnysideup'
        const disqusConfig = {
                identifier: data.markdownRemark.id,
                title: post.tile,
                url: baseUrl + pageContext.slug
        }

        return (
                <Layout pageTitle = {post.title}>
                        <SEO title={post.title}/>
                        <h1>{post.title}</h1>
                                        <Card>
                                                <Img className="card-image-top" fluid={post.image.childImageSharp.fluid}/>
                                                <CardBody>
                                                        <CardSubtitle>
                                                        <span className = "text-info">{post.date}</span> by{' '}
                                                        <span className = "text-info">{post.author}</span>
                                                        </CardSubtitle>
                                                        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
                                                        <ul className = "post-tags">
                                                                {post.tags.map(tag => (
                                                                <li key={tag}>
                                                                        <Link to={`/tag/${slugify(tag)}`}>
                                                                                <Badge color = "primary">{tag}</Badge>
                                                                        </Link>

                                                                </li>
                                                                ))}
                                                        </ul>
                                            </CardBody>   
                                        </Card>
                                        <h3 className = "text-center">
                                                Share this post
                                        </h3>
                                        <div className="text-center social-share-links">
                                                <ul>
                                                        <li>
                                                                <a href={'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + pageContext.slug} className = "facebook" target="_blank" rel="noopener noreferrer">
                                                                        <i className="fab fa-facebook-f fa-2x"></i>
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href={'https://www.twitter.com/share?url=' + baseUrl + pageContext.slug + '&text=' + post.title + '&via' + 'colins twitter handle'} className = "twitter" target="_blank" rel="noopener noreferrer">
                                                                        <i className="fab fa-twitter fa-2x"></i>
                                                                </a>
                                                        </li>
                                                </ul>
                                        </div>
                                        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>

                </Layout>

        )
        
}

export const postQuery = graphql`
        query blogPostBySlug($slug: String!) {
                markdownRemark(fields: { slug: { eq : $slug } }) {
                        id
                        html
                        frontmatter {
                                title
                                author
                                date(formatString: "MMM Do YYYY")
                                tags
                                image {
                                        childImageSharp {
                                                fluid(maxWidth: 700) {
                                                  ...GatsbyImageSharpFluid
                                                }
                                        }
                                }
                        }
              
                }
        }
`
export default SinglePost
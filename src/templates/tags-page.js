import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Badge, Button } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'

const tagsPage = ({ pageContext }) => {
        const { tags, tagPostCounts } = pageContext;
        return (
                <Layout pageTitle="All Topics">
                        <SEO title = "All tags" keywords={['tags', 'topics']}/>
                
                        <ul>
                                {tags.map(tag => (
                                        <div className = "row-fluid">
                                                <li key={tag} style={{ marginBottom: '10px'}}>
                                                        <Button color="primary" size='lg' href={`/tag/${slugify(tag)}`}>
                                                                {/* displaying count of the posts with this tag  */}
                                                                {tag} <Badge color="light">{tagPostCounts[tag]}</Badge> 
                                                        </Button>
                                                </li>
                                        </div>
                                ))}
                        </ul>
                </Layout>
        )

}

export default tagsPage
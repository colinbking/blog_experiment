const { slugify } = require('./src/util/utilityFunctions');
const path = require('path')
const _=require('lodash')

exports.onCreateNode = ({ node, actions }) => {
        const { createNodeField } = actions
        if(node.internal.type === 'MarkdownRemark'){
                const slugFromTitle = slugify(node.frontmatter.title)
                createNodeField({
                        node, 
                        name: 'slug',
                        value: slugFromTitle,
                })

        }

}

exports.createPages = ({ actions, graphql }) => {
        const { createPage } = actions;

        const templates = {
                singlePost: path.resolve('src/templates/single-post.js'),
                tagsPage: path.resolve('src/templates/tags-page.js'),
                postList: path.resolve('src/templates/post-list.js')
        }

        return graphql(`
        {
                allMarkdownRemark{
                        edges{
                                node{
                                        frontmatter{
                                                author
                                                tags
                                        }
                                        fields{
                                                slug
                                        }
                                }
                        }
                }
        }
         `).then(res => {
                if(res.errors) return Promise.reject(res.errors)
                const posts = res.data.allMarkdownRemark.edges

                // Creating single blog post pages
                posts.forEach(({node}) => {
                        createPage({
                                path: node.fields.slug,
                                component: templates.singlePost, 
                                context: {
                                        // Passing slug for template 
                                        slug: node.fields.slug
                                }
                        })
                })
        // Getting all tags
         let tags = []
         _.each(posts, edge => {
                 if(_.get(edge, 'node.frontmatter.tags')) { // checks only posta having tags
                 tags = tags.concat(edge.node.frontmatter.tags)
                 }
        })
        // Create  map of tag to # occurences of the tag
        let tagPostCounts = {} 
        tags.forEach(tag => {
                tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
        })
        // remove duplicate entires
        tags = _.uniq(tags)

        // Creating tags page
        createPage({
                path: '/tags',
                component: templates.tagsPage,
                context: {
                        tags,
                        tagPostCounts
                }
        })

        const postsPerPage = 3
        const numberOfPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numberOfPages }).forEach((_, idx) => {
                const isFirst = idx === 0
                const currentPage = idx + 1

                if(isFirst){
                        console.log("returned bc first\n")
                        return}
                // create page for the nth page
                createPage({
                        path: `/page/${currentPage}`,
                        component: templates.postList,
                        context: {
                                limit: postsPerPage, 
                                skip: idx * postsPerPage, // how many posts to skip for displaying, based on page 
                                currentPage

                        }

                })
        })
        })
}
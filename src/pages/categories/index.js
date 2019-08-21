import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import formatCategoryTitle from '../../utils/formatCategoryTitle'

export default props => {
  const { data } = props
  const { allMarkdownRemark } = data
  const { group } = allMarkdownRemark
  return (
    <Layout
      title={data.site.siteMetadata.title}
      crumbs={[{ path: '/categories', text: 'Categories' }]}
    >
      <SEO
        title={`${data.site.siteMetadata.title} | Categories`}
        description={data.site.siteMetadata.description}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <h1>All Categories</h1>
      <ul>
        {group.map(item => (
          <li key={item.fieldValue}>
            <Link to={`/categories/${item.fieldValue}`}>
              {formatCategoryTitle(item.fieldValue)} ({item.totalCount})
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/blog">All posts</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CategoriesQuery {
    site {
      siteMetadata {
        title
        description
        author
        lang
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
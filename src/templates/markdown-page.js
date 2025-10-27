import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import { Layout, Link } from '$components'
import NextPrevious from '../components/NextPrevious'
import config from '../../config'
import { Edit, StyledHeading, StyledMainWrapper } from '../components/styles/Docs'

require(`katex/dist/katex.min.css`)


const MarkdownPageTemplate = ({ data, location }) => {
  const { markdownRemark, allMarkdownRemark, site } = data
  const { frontmatter, html } = markdownRemark

  // Use only Markdown nodes for navigation
  const allNodes = allMarkdownRemark.edges.map(({ node }) => node)

  const githubIcon = require('../components/images/github.svg').default
  const { siteMetadata: { docsLocation } } = site

  // Build navigation like in docs.js
  const forcedNavOrder = config.sidebar.forcedNavOrder
  const navItems = allNodes
    .map((node) => node.fields.slug)
    .filter(slug => slug !== '/')
    .sort()
    .reduce(
      (acc, cur) => {
        if (forcedNavOrder.find(url => url === cur)) {
          return { ...acc, [cur]: [cur] }
        }

        let prefix = cur.split('/')[1]

        if (config.gatsby && config.gatsby.trailingSlash) {
          prefix = prefix + '/'
        }

        if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
          return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] }
        } else {
          return { ...acc, items: [...acc.items, cur] }
        }
      },
      { items: [] }
    )

  const nav = forcedNavOrder
    .reduce((acc, cur) => {
      return acc.concat(navItems[cur])
    }, [])
    .concat(navItems.items)
    .map(slug => {
      if (slug) {
        const node = allNodes.find((node) => node.fields.slug === slug)
        if (node) {
          return { title: node.fields.title, url: node.fields.slug }
        }
      }
      return null
    })
    .filter(Boolean)

  // Meta tags
  const metaTitle = frontmatter.metaTitle
  const metaDescription = frontmatter.metaDescription

  let canonicalUrl = config.gatsby.siteUrl
  canonicalUrl = config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl
  canonicalUrl = canonicalUrl + markdownRemark.fields.slug

  return (
    <Layout location={location} tableOfContents={markdownRemark.headings}>
      <Helmet>
        {metaTitle ? <title>{metaTitle}</title> : null}
        {metaTitle ? <meta name="title" content={metaTitle} /> : null}
        {metaDescription ? <meta name="description" content={metaDescription} /> : null}
        {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
        {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
        {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
        {metaDescription ? (
          <meta property="twitter:description" content={metaDescription} />
        ) : null}
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className={'titleWrapper'}>
        <StyledHeading>{markdownRemark.fields.title}</StyledHeading>
        <Edit className={'mobileView'}>
          {docsLocation && (
            <Link className={'gitBtn'} to={`${docsLocation}/${markdownRemark.parent.relativePath}`}>
              <img src={githubIcon} alt={'Github logo'} /> Edit on GitHub
            </Link>
          )}
        </Edit>
      </div>
      <StyledMainWrapper>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledMainWrapper>
      <div className={'addPaddTopBottom'}>
        <NextPrevious page={markdownRemark} nav={nav} />
      </div>
    </Layout>
  )
}

export default MarkdownPageTemplate

export const Head = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  
  return (
    <>
      <title>{frontmatter.metaTitle || frontmatter.title}</title>
      <meta name="description" content={frontmatter.metaDescription} />
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    markdownRemark(id: { eq: $id }) {
      fields {
        id
        title
        slug
      }
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        title
        metaTitle
        metaDescription
      }
      html
      tableOfContents
      headings {
        id
        value
        depth
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`
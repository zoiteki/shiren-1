import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Layout } from '../components';
import { StyledHeading, StyledMainWrapper } from '../components/styles/Docs';

const pageStyles = {
  maxWidth: "800px",
  margin: "0 auto",
};

const navStyles = {
  marginBottom: "2rem",
};

const linkStyles = {
  color: "#8954A8",
  textDecoration: "none",
  display: "block",
  padding: "0.5rem 0",
  borderBottom: "1px solid #eee",
};

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      indexMarkdown: markdownRemark(fileAbsolutePath: { regex: "/content/index.md$/" }) {
        frontmatter {
          title
          metaTitle
          metaDescription
        }
        html
      }
      allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
        nodes {
          id
          frontmatter {
            title
          }
          fileAbsolutePath
        }
      }
    }
  `);

  const { indexMarkdown, allMarkdownRemark } = data;
  const pages = allMarkdownRemark.nodes;

  return (
    <Layout location={location} tableOfContents={null}>
      <div className={'titleWrapper'}>
        <StyledHeading>{indexMarkdown?.frontmatter?.title || "Top Page"}</StyledHeading>
      </div>
      <StyledMainWrapper>
        <div dangerouslySetInnerHTML={{ __html: indexMarkdown?.html || "" }} />
      </StyledMainWrapper>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <title>Shiren 1 SFC</title>
      <meta name="description" content="Landing page of Shiren 1 SFC wiki" />
    </>
  );
};
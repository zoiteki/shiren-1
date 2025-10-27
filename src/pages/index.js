import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Layout } from '../components';
import { StyledHeading, StyledMainWrapper } from '../components/styles/Docs';


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

  const { indexMarkdown } = data;
  
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
      <title>Shiren the Wanderer wiki</title>
      <meta name="description" content="Shiren the Wanderer wiki guide" />
    </>
  );
};
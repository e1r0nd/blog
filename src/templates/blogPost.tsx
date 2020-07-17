import React, { ReactElement } from 'react';
import { graphql, Link } from 'gatsby';

interface TemplateProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
  pageContext: {
    prev: { frontmatter: { path: string } };
    next: { frontmatter: { path: string } };
  };
}

const Template: React.FC<TemplateProps> = ({ data, pageContext }): ReactElement => {
  const { html } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  const { next, prev } = pageContext;

  return (
    <div>
      <h1>{title}</h1>
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      {prev && <Link to={prev.frontmatter.path}>Prev</Link>}
      {next && <Link to={next.frontmatter.path}>Next</Link>}
    </div>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;

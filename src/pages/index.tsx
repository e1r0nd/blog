import Header from '../components/Header';
import React, { ReactElement } from 'react';
import { graphql, Link } from 'gatsby';

interface LayoutProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: {
              title: string;
              path: string;
              date: string;
            };
          };
        },
      ];
    };
  };
}

const Layout: React.FC<LayoutProps> = ({ data }): ReactElement => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <div
              key={frontmatter.path}
              style={{
                marginBottom: '1rem',
              }}
            >
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default Layout;

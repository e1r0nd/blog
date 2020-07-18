import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

interface TemplateProps {
  pageContext: {
    posts: [{ frontmatter: { path: string; title: string } }];
    tagName: string;
  };
}

const SingleTagTemplate: React.FC<TemplateProps> = ({ pageContext }): ReactElement => {
  const { posts, tagName } = pageContext;
  return (
    <div>
      <div>Posts about &quot;{tagName}&quot;</div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SingleTagTemplate;

import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

interface TemplateProps {
  pageContext: {
    tags: string[];
  };
}

const AllTagsTemplate: React.FC<TemplateProps> = ({ pageContext }): ReactElement => {
  const { tags } = pageContext;

  return (
    <div>
      <div>
        <ul>
          {tags.map((tagName, index) => {
            return (
              <li key={index}>
                <Link to={`${tagName}`}>{tagName}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllTagsTemplate;

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

type TitleAndDescriptionProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
  };
};

const TitleAndDescription: React.FC<TitleAndDescriptionProps> = ({ data }) => {
  const { title, description } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Roboto',
      }}
    >
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <p
        style={{
          marginTop: 0,
          opacity: 0.5,
        }}
      >
        {description}
      </p>
    </div>
  );
};

const Header: React.FC<unknown> = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data) => <TitleAndDescription data={data} />}
    />
  );
};

export default Header;

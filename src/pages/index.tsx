import Header from '../components/Header';
import React from 'react';
import { PageProps } from 'gatsby';

export const Layout: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>
        <Header />
      </h1>
      <h1>Hello world!</h1>
    </div>
  );
};

export default Layout;

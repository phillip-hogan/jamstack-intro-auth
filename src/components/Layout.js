import React from 'react';
import { IdentityContextProvider } from 'react-netlify-identity';
import { Link } from 'gatsby';
import './layout.css';

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://jamstack-intro-auth-ph.netlify.com">
    <header>
      <Link to="/">JAMstack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;

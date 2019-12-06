import React from 'react';
import { ResetCSS, GlobalCSS } from '../components';
import { StyledHeader as Header } from './Header';
import { StyledFooter as Footer } from './Footer';

export const Layout: React.FC = ({ children }) => (
  <>
    <ResetCSS />
    <GlobalCSS />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;

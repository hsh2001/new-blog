import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import Reset from '../styles/Reset';

import Box from './Box';
import Footer from './Footer';
import Header from './Header';

const Main = styled(Box)`
  margin-top: 4rem;
  padding-top: 0;

  h1 {
    text-align: center;
  }
`;

interface LayoutProps {
  subTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, subTitle }) => {
  return (
    <>
      <Head>
        <title>DEVDEV {subTitle ? `- ${subTitle}` : ''}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Reset />

      <Header />
      <Main>
        {subTitle && <h1>{subTitle}</h1>}
        {children}
        <br />
        <br />
        <Link href="/">
          <a>홈으로</a>
        </Link>
      </Main>
      <Box>Your comment section here</Box>
      <Footer />
    </>
  );
};

export default Layout;

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
  ogImageSrc?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  subTitle,
  ogImageSrc = '',
}) => {
  const title = `DEVDEV ${subTitle ? `- ${subTitle}` : ''}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />

        {ogImageSrc && <meta property="og:image" content={ogImageSrc} />}
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

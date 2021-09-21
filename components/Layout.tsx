import Head from 'next/head';
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

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hello NEXT!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Reset />

      <Header />
      <Main>{children}</Main>
      <Box>Your comment section here</Box>
      <Footer />
    </>
  );
};

export default Layout;

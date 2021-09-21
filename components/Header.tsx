import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
  text-align: center;

  a {
    font-weight: 800;
    font-size: 18px;
    color: #333;
    text-decoration: none;
  }
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Link href="/">
      <a>BLOG NAME HERE</a>
    </Link>
  </HeaderContainer>
);

export default Header;

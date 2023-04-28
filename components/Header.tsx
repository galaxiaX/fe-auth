import Head from "next/head";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    color: #4b5563;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #d1d5db;
    padding-bottom: 2.5rem;
  }
`;

const Header = () => {
  return (
    <>
      <Head>
        <title>My Online Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderWrapper>
        <h1>My Online Store</h1>
      </HeaderWrapper>
    </>
  );
};

export default Header;

import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Wrapper = styled.div`
  display: flex;
  font-size: 18px;
  color: #4b5563;
`;

const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  width: 100%;
`;

const Layout = ({ children }: any) => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </Wrapper>
  );
};

export default Layout;

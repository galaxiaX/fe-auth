import styled from "styled-components";

const FooterBar = styled.footer`
  margin-top: 2rem;
  padding: 1rem 0;
  border-top-width: 1px;
  border-color: #d1d5db;
  font-size: 0.875rem;
  color: #adb0b3;
  text-align: center;
`;

const Footer = () => {
  return <FooterBar>&copy; 2023 by galaxiaX</FooterBar>;
};

export default Footer;

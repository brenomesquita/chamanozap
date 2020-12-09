import styled from 'styled-components';

const Footer = styled.footer`
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 64pt;
  background-color: ${props => props.theme.lightGray};
`;

export default Footer;

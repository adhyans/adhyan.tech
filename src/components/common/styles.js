import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%
}
body {
  margin: 0;
  font-family: ${props => props.theme.fontFamily};
}
h1 {
  margin: 0;
  padding: 0;
}
`;

export const Layout = styled.div`
  max-width: ${({ width }) => (width ? width : '90rem')};
  margin: auto;
  margin-top: 2.4rem;

  @media (max-width: 60rem) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

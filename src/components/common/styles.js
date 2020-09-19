import { createGlobalStyle } from 'styled-components';

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

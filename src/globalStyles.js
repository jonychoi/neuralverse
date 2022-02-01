import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`
  a {
      color: ${props => props.darkMode ? "#1C8BD8" : "#00B3DA"}
  }
  
a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}
`;
 
export default GlobalStyle;
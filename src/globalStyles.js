import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

 
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
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,0); 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;
 
export default GlobalStyle;
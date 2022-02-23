import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { blueColor, purColor, redColor } from './styles';

 
const GlobalStyle = createGlobalStyle`
.landing {
    // filter: progid: DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#003073', endColorstr='#029797');
    // background-image: url(//img.alicdn.com/tps/TB1d.u8MXXXXXXuXFXXXXXXXXXX-1900-790.jpg);
    // background-size: 100%;
    // background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0, #003073), color-stop(100%, #029797));
    // background-image: -webkit-linear-gradient(135deg, #003073, #029797);
    // background-image: -moz-linear-gradient(45deg, #003073, #029797);
    // background-image: -ms-linear-gradient(45deg, #003073 0, #029797 100%);
    // background-image: -o-linear-gradient(45deg, #003073, #029797);
    // background-image: linear-gradient(135deg, #003073, #029797);
    // text-align: center;
    // margin: 0px;
    // overflow: hidden;
  }
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
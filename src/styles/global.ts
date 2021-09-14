import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 14px Poppins, sans-serif;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 14px Poppins, sans-serif;
    h1{
      font: 500 32px Poppins, sans-serif;
    }
  }

  :root{
      --white-color: #ffffff;
      --primary-color: #00ced1; //#3c7380
      --secundary-color: #3490dc;
      --royal-blue: #4169e1;
  }
`;

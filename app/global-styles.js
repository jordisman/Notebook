import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: white;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: AliceBlue;
    min-height: 90%;
    min-width: 90%;
    margin: 3rem;
    padding: 3rem;
    box-shadow: 5px 5px 10px #808080;
  }

  p,
  label {
    font - family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;

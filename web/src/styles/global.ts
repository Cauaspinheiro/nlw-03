import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.background.color};
    color: ${props => props.theme.texts.title};

  }

  body, input, button, textarea {
    font: 600 18px Nunito, Roboto, sans-serif;
  }
`

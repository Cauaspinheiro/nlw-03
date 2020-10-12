import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 60%
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.background.color};
    color: ${props => props.theme.texts.title_white};
  }

  body, input, button, textarea {
    font: 600 18px Nunito, Roboto, sans-serif;
  }
`

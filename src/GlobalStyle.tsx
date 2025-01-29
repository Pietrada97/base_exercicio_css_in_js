import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --cor-principal: #a7727d;
  --cor-secundaria: #f9f5e7;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }

  /* Outras regras globais */
`

export default GlobalStyle

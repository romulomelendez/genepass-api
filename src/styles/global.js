import { createGlobalStyle } from 'styled-components'

// GLOBAL STYLES
export const GlobalStyle = createGlobalStyle `

  * {

    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #f2fff9;
    
    h1, h4 {
      
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      
    }

}

`
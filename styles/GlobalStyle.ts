import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: none;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    color: #fff;


  }
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 640px) { 
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      height: 600px;
      width: 938px;
      margin: 2rem auto 20rem auto;

    }
  }
`
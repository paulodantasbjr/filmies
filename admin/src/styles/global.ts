import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    @media screen and (max-width: 800px){
      font-size: 93.75%;
    }
    @media screen and (max-width: 400px){
      font-size: 87.5%;
    }
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: 1rem ;
    font-family: 'Roboto', sans-serif;;
    font-weight: 400 ;
  }
`

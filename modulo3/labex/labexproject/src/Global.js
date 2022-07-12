import { createGlobalStyle } from 'styled-components';
import Space from './img/espaço.png'


export const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif ;
    background-image: url(${Space});
    box-sizing: border-box;
}`
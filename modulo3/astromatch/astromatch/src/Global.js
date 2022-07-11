import { createGlobalStyle } from 'styled-components';
import BackGround from './img/gradiente.jpg'


export const GlobalStyle = createGlobalStyle`

*::-webkit-scrollbar {
        width: 0px;
}
/* *::-webkit-scrollbar-track {
        background:white ;
} */
*::-webkit-scrollbar-thumb {
        background-color: white;
        border-radius: 20px;
}

    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif ;
        background-color: #ff5678;
    }
`
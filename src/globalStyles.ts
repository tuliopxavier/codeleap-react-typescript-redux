import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #ddd;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    /* @media (max-width: 768px) {} */
`

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
        
        @media screen and (prefers-color-scheme: dark) {
            color: #ddd;
            background-color: #222;
        }
    }
`;

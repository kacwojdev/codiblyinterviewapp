import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        background: white;
        font-family: 'Montserrat', sans-serif;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    input, button {
        font: inherit;
    }
`
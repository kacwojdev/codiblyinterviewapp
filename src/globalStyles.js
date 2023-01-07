import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
        width: 100%;
    }

    body {
        margin: 0;
        padding: 0;
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
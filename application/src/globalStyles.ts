import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
    @import url('https://fonts.googleapis.com/css2?family=Vidaloka&display=swap');

    body {
        max-width: 400px;
        margin: auto;
        font-family: Roboto, sans-serif;
        height: 100%;
    }
`;

export default GlobalStyle;
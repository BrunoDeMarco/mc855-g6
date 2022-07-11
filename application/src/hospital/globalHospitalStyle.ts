import { createGlobalStyle } from "styled-components";

const GlobalHospitalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

    body {
        margin: 0;
        font-family: Roboto, sans-serif;
        height: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalHospitalStyle;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.light200};
        color: ${({ theme }) => theme.colors.dark400};
    }

    body, input, button, textarea, li {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;

        list-style: none;
        
        outline: none;
    }

    button, a, label {
        cursor: pointer;
        transition: filter 0.2s;

        text-decoration: none;
    }

    a:hover, label:hover {
        filter: brightness(0.7);
    }
`;
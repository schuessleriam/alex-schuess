import Styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-family: 'Open Sans Condensed', sans-serif;
        color: white;
        background: rgb(255,121,159);
        background-image: linear-gradient(174deg, rgba(255,121,159,1) 0%, rgba(0,96,255,1) 100%);
        background-position: fixed;

        @media (max-width: 800px) {
        }

        @media (min-width: 1601px) {
            font-size: 28px;
        }
    }
    
    a{
        text-decoration: none;
        color: black;
    }
    
    *{
        box-sizing: border-box;
    }
`;

export const AppContainer = Styled.div`
    display: flex;
    flex-direction: column;
`;
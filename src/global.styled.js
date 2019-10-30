import Styled, { createGlobalStyle } from 'styled-components';

export const Colors = {
    primeLight: '#FEFFFF',
    accentLight: '#DEF2F1',
    main: '#3AAFA9',
    primeDark: '#17252A',
    accentDark: '#2B7A78'
};

export const GlobalStyle = createGlobalStyle`

    body{
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-style: italic;
        color: white;
        background: ${Colors.main};
    }

    h1, h2{
        font-style: thin;
        font-style: normal;
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
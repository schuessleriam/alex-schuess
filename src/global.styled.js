import Styled, { createGlobalStyle } from 'styled-components';

export const Colors = {
    primeLight: '#FEFFFF',
    accentLight: '#DDEDF4',
    main: '#1181B2',
    primeDark: '#212221',
    accentDark: '#44449B'
};

export const GlobalStyle = createGlobalStyle`

    body{
        margin: 0;
        font-family: 'Muli', sans-serif;
        color: white;
        background: linear-gradient(180deg, rgba(221,237,244,1) 0%, rgba(17,129,178,1) 28%, rgba(68,68,155,1) 100%);
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
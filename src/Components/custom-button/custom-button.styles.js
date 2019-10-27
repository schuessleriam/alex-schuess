import Styled, { css } from 'styled-components';
import { Colors } from './../../global.styled';

const invertedButtonStyles = css`
    background-color: ${Colors.accentLight};
    color: ${Colors.primeDark};
    border: none;
    
    @media screen and (min-width: 800px){
        &:hover {
          background-color: ${Colors.primeDark};
          color: ${Colors.accentLight};
          border: none;
        }
    }
`;

const buttonStyles = css`
    background-color: ${Colors.primeDark};
    color: ${Colors.accentLight};
    border: none;

    @media screen and (min-width: 800px){
        &:hover {
            background-color: ${Colors.primeLight};
            color: ${Colors.accentDark};
            border: 1px solid black;
        }
    }
`;

const GetButtonStyles = props => {
    if(props.inverted){
        return invertedButtonStyles;
    }
    else{
        return buttonStyles;
    }

};

export const CustomButtonContainer = Styled.button`
    min-width: 165px;
    max-width: 200px;
    border-radius: 80px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    z-index: 2;
  
    ${GetButtonStyles}
    
`;
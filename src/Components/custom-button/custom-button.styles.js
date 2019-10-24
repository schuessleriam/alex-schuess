import Styled, { css } from 'styled-components';

const invertedButtonStyles = css`
    background-color: white;
    color: #5C7998;
    border: none;
    
    @media screen and (min-width: 800px){
        &:hover {
          background-color: #5C7998;
          color: white;
          border: none;
        }
    }
`;

const buttonStyles = css`
background-color: #5C7998;
    color: white;
    border: none;

    @media screen and (min-width: 800px){
        &:hover {
            background-color: white;
            color: #5C7998;
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
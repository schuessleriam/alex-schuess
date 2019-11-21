import Styled from 'styled-components';
import CustomButton from './../custom-button/custom-button.component';
import { Colors } from './../../global.styled';

export const HomePageContainer = Styled.div`
    padding-bottom: 0px;
    width: 100%;
    color: ${Colors.accentLight};
`;

export const CoverPhotoContainer = Styled.img`
    width: 100%;
    padding: 0px;
    border: 0px;
    opacity: 0.8;

    @media screen and (max-width: 800px){
        min-height: 800px;
        object-fit: cover;
    }
`;

export const PreCoverPhotoContainer = Styled.div`
    width: 100%;
    height: 800px;
    padding: 0px;
    border: 0px;
    opacity: 0.7;
    background: linear-gradient(${Colors.primeDark}, ${Colors.primeLight});
`;

export const HomePageContent = Styled.div`

    @media screen and (min-width: 800px){
        display: grid;
        grid-template-columns: 15vw 50vw 1fr 1fr;
        grid-template-rows: 15vw 100px 80px 150px 1fr 1fr;
    }

    @media screen and (max-width: 800px){
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }

    width: 100%;
    position: absolute;
    z-index: 1;
`;

export const Greeting = Styled.h1`
    font-size: 36px;
    padding-top: 200px;
    font-family: 'Roboto Mono', monospace;
    @media screen and (min-width: 800px){
        padding-top: 0px;
        margin-top: 60px;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }
`;

export const Description = Styled.h3`
    font-size: 28px;
    padding-bottom: 30px;

    @media screen and (min-width: 800px){
        grid-column: 2 / 3;
        grid-row: 3 / 4;
    }
`;

export const ProjectsButton = Styled(CustomButton)`
    align-self: center;

    @media screen and (min-width: 800px){
        grid-column: 2 / 3;
        grid-row: 4 / 5;
    }
`;

export const StyleBox = Styled.div`
    @media screen and (min-width: 950px){
        grid-column: 2 / 4;
        grid-row: 2 / 6;
        margin: -20px;
        background: ${Colors.primeLight};
        opacity: 0.1;
    }
`;
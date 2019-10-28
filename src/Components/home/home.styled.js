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
`;

export const HomePageContent = Styled.div`
    display: grid;
    grid-template-columns: 15vw 50vw 1fr 1fr;
    grid-template-rows: 15vw 130px 180px 120px 1fr 1fr;
    width: 100%;
    position: absolute;
    z-index: 1;
`;

export const Greeting = Styled.h1`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    font-size: 64px;
`;

export const Description = Styled.h3`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    font-size: 28px;
    padding-left: 4px;
`;

export const ProjectsButton = Styled(CustomButton)`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
`;

export const StyleBox = Styled.div`
    grid-column: 2 / 4;
    grid-row: 2 / 6;
    margin: -20px;
    background: ${Colors.primeLight};
    opacity: 0.1;

`;
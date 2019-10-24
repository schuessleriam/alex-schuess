import Styled from 'styled-components';
import CustomButton from './../custom-button/custom-button.component';

export const HomePageContainer = Styled.div`
    padding-bottom: 0px;
    width: 100%;
`;

export const CoverPhotoContainer = Styled.img`
    width: 100%;
    height: auto;
    padding: 0px;
    border: 0px;
    opacity: 0.8;
`;

export const HomePageContent = Styled.div`
    display: grid;
    grid-template-columns: 15vw 1fr 1fr 1fr;
    grid-template-rows: 15vw 130px 180px 120px 1fr 1fr;
    width: 100%;
    height: 65vw;
    position: absolute;
    z-index: 1;
`;

export const Greeting = Styled.h1`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    font-size: 84px;
`;

export const Description = Styled.h3`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    font-size: 34px;
    padding-left: 4px;
`;

export const ProjectsButton = Styled(CustomButton)`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    font-size: 22px;
`;

export const StyleBox = Styled.div`
    grid-column: 2 / 4;
    grid-row: 2 / 6;
    margin: -20px;
    background: white;
    opacity: 0.1;

`;
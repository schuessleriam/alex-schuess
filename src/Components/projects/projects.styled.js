import Styled from 'styled-components';
import { Colors } from './../../global.styled';

export const ProjectsContainer = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
    background: ${Colors.primeLight};
    color: ${Colors.accentDark};
`;

export const ProjectsHeader = Styled.h1`
    height: 150px;
    font-size: 54px;
    padding-top: 50px;
    text-align: center;    
`;

export const ProjectsContentBox = Styled.div`
    display: flex;
`;

export const ProjectsContentBoxBorder = Styled.div`
    min-width: 10%;
    height: 600px;
    z-index: 5;
`;

export const ProjectsContent = Styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1320px){
        overflow-x: scroll;
        overflow-y: hidden;  
    }
`;


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

export const ProjectsContent= Styled.div`
    display: flex;
    padding: 20px 10%;
    justify-content: space-between;  
`;


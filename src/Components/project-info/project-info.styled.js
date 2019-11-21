import Styled from 'styled-components';
import { Colors } from './../../global.styled';

export const ClosePage = Styled.div`
    position: fixed;
    right: 5%;
    top: 5%;
    cursor: pointer;
`;

export const ProjectInfoContainer = Styled.div`
    display: flex;
    justify-content: center;
    background: ${Colors.main};
    color: ${Colors.primeLight};
`;


export const ProjectInfoContent = Styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;

export const ProjectHeader = Styled.h1`
    font-size: 24px;
    text-align: center;
    margin: 0px;
    padding-top: 50px;
`;

export const ProjectSubHeader = Styled.h2`
    font-size: 28px;
    color: ${Colors.primeDark};
    align-self: flex-start;
`;

export const ProjectSection = Styled.div`
    font-size: 18px;
    padding-bottom: 20px;
`;

export const ProjectSectionWithImage = Styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    font-size: 18px;
    padding-bottom: 20px;

    @media screen and (max-width: 800px){
        grid-template-columns: 100%;
    }
`;

export const SectionText = Styled.div`
    text-align: start;
    line-height: 34px;
    padding-bottom: 20px;
`;

export const SectionList = Styled.ul`
    list-style-type: circle;
    letter-spacing: 1.5px;
    line-height: 28px;
    margin-top: 0px;
    padding-top: 0px;
`;

export const SectionImage = Styled.img`
    width: 100%;
    padding-left: 5%;
    opacity: 1;
    align-self: center;
`;

export const ExitText = Styled.div`
    text-align: center;
    font-size: 18px;
    color: ${Colors.accentDark};
    padding-bottom: 50px;
`;

export const InlineLink = Styled.a`
    color: ${Colors.primeDark};
`;

export const Spacer = Styled.div`
    padding: 10px;
`;



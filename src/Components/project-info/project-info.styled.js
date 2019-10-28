import Styled from 'styled-components';
import { Colors } from './../../global.styled';

export const ProjectInfoContainer = Styled.div`
    display: flex;
    justify-content: center;
    background: ${Colors.primeLight};
    border: 2px solid ${Colors.primeDark};
    position: fixed;
    height: 90%;
    width: 96%;
    opacity: 0.98;
    z-index: 5;
    top: 8%;
    left: 2%;
    color: ${Colors.primeDark};
    overflow-y: scroll;
`;


export const ProjectInfoContent = Styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`;

export const ProjectHeader = Styled.h1`
    font-size: 54px;
    text-align: center;
    margin: 0px;
    padding-top: 50px;
`;

export const ProjectSubHeader = Styled.h2`
    font-size: 44px;
    align-self: flex-start;
`;

export const ProjectSection = Styled.div`
    font-size: 28px;
    padding-bottom: 50px;
`;

export const ProjectSectionWithImage = Styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    font-size: 28px;
    padding-bottom: 20px;
`;

export const SectionText = Styled.div`
    text-align: start;
    line-height: 56px;
    padding-bottom: 20px;
`;

export const SectionList = Styled.ul`
    list-style-type: circle;
    letter-spacing: 1.5px;
    line-height: 50px;
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
    color: ${Colors.accentDark};
`;

export const Spacer = Styled.div`
    padding: 80px;
`;



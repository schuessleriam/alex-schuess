import Styled from 'styled-components';
import { ReactComponent as Github } from './../../assets/mark-github.svg';
import { ReactComponent as BriefCase } from './../../assets/briefcase.svg';
import { Colors } from './../../global.styled';

export const LinksContainer = Styled.div`
    display: flex;
    flex-direction: column;
    height: 800px;
    align-self: center;
    color: ${Colors.accentLight};
    padding: 30px;
`;

export const LinksHeader = Styled.h1`
    height: 200px;
    font-size: 54px;
    padding-top: 50px;
    text-align: center;    
`;

export const LinkContainer = Styled.a`
    display: flex;
    width: auto;
    cursor: default;
`;

export const LinkText = Styled.div`
    font-size: 32px;
    color: ${Colors.accentLight};
    padding-left: 50px;
    align-self: center;
`;

export const LinkGithub = Styled(Github)`
    height: 100px;
    width: 50px;
    fill: ${Colors.accentLight};
    cursor: pointer;
`;

export const LinkResume = Styled(BriefCase)`
    height: 100px;
    width: 50px;
    fill: ${Colors.accentLight};
    cursor: pointer;
`;

export const StyleBox = Styled.div`
    @media screen and (min-width: 450px){
        align-self: center;
        margin-top: 350px;
        opacity: 0.05;
        z-index: -1;
        width: 0;
        height: 0;
        border: 250px solid transparent;
        border-bottom-color: ${Colors.accentLight};
        position: absolute;
    }
`;


import Styled from 'styled-components';
import { ReactComponent as Github } from './../../assets/mark-github.svg';
import { ReactComponent as BriefCase } from './../../assets/briefcase.svg';

export const LinksContainer = Styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 800px;
    align-self: center;
    color: white;
`;

export const LinksHeader = Styled.h1`
    color: white;
    height: 200px;
    font-size: 54px;
    padding-top: 50px;
    text-align: center;    
`;

export const LinkContainer = Styled.a`
    display: flex;
    color: white;
    width: auto;
    cursor: default;
`;

export const LinkText = Styled.div`
    font-size: 32px;
    padding-left: 50px;
    align-self: center;
`;

export const LinkGithub = Styled(Github)`
    height: 100px;
    width: 50px;
    fill: white;
    cursor: pointer;
`;

export const LinkResume = Styled(BriefCase)`
    height: 100px;
    width: 50px;
    fill: white;
    cursor: pointer;
`;

export const StyleBox = Styled.div`
    align-self: center;
    opacity: 0.1;
    z-index: -1;
    width: 0;
    height: 0;
    border: 450px solid transparent;
    border-bottom-color: white;
    position: absolute;
`;


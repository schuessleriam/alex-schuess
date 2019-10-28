import Styled from 'styled-components';
import {ReactComponent as GithubIcon} from './../../assets/mark-github.svg';
import { Colors } from './../../global.styled';

export const HeaderContainer = Styled.div`
    padding-bottom: 20px;
    padding-right: 5%;
    padding-left: 2%;
    font-size: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 5;
    fill: ${Colors.primeDark};
    color: ${Colors.primeDark};
    font-style: normal;
`;

export const HeaderBlur = Styled.div`
    width: 100%;
    height: 60px;
    z-index: 4;
    position: fixed;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`;

export const HeaderBack = Styled.div`
    width: 100%;
    height: 60px;
    z-index: 4;
    position: fixed;
    background: ${Colors.accentLight};
    opacity: 0.6;
`;

export const LinksContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 80px;
    padding-top: 5px;
    height: auto;
`;

export const LinkContainer = Styled.a`
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

export const GithubLink = Styled(GithubIcon)`
    height: 50px;
    width: 25px;
`;

export const TabsContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 300px;
    height: auto;
    padding-top: 5px;
`;

export const TabContainer = Styled.div`
    display: flex;
    padding-top: 10px;
    justify-content: center;
    align-content: center;
    cursor: pointer;
`;


import Styled from 'styled-components';
import {ReactComponent as GithubIcon} from './../../assets/mark-github.svg';

export const HeaderContainer = Styled.div`
    padding-bottom: 20px;
    padding-right: 5vw;
    padding-left: 2vw;
    font-size: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 5;
    //background: black;
    //opacity: 0.2;

`;

export const LinksContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 80px;
    padding-top: 1vw;
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
    fill: white;
`;

export const TabsContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 300px;
    height: auto;
    
`;

export const TabContainer = Styled.div`
    display: flex;
    padding-top: 2vw;
    justify-content: center;
    align-content: center;
    cursor: pointer;
`;


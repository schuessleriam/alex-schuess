import Styled from 'styled-components';
import {ReactComponent as GithubIcon} from './../../assets/mark-github.svg';

export const HeaderContainer = Styled.div`
    padding-bottom: 20px;
    width: 100%;
    display: flex;
    position: fixed;
    z-index: 6;
`;

export const LinkContainer = Styled.a`
    display: flex;
    width: 60px;
    justify-content: center;
    align-items: center;
`;

export const GithubLink = Styled(GithubIcon)`
    height: 40px;
    width: 20px;
    margin-top: 6px;
    fill: white;
`;
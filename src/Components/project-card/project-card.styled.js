import Styled from 'styled-components';
import {ReactComponent as BrowserIcon} from './../../assets/browser.svg';
import {ReactComponent as CodeIcon} from './../../assets/code.svg';
import { Colors } from './../../global.styled';

export const HeaderImageContainer = Styled.div`
    display: flex;
    justify-content: center;
    max-width: 110px;
    height: auto;
    max-height: 110px;
    align-content: center;
    align-self: center;
    padding-top: 10px;
`;

export const HeaderImage = Styled.img`
    min-width: 90px;
    min-height: 90px;
    height: auto;
`;

export const ProjectHeader = Styled.h2`
    text-align: center;
    font-size: 28px;
    margin: 0px;
`;

export const ProjectSubHeader = Styled.h3`
    text-align: center;
    font-size: 16px;
    margin: 0px;
`;

export const DescriptionContainer = Styled.span`
    text-align: center;
    font-size: 18px;
`;

export const ProjectFooter = Styled.h3`
    text-align: center;
    font-size: 18px;
    letter-spacing: 1px;
`;

export const LinkContainer = Styled.a`
    display: grid;
    grid-template-columns: 20% 80%;
    padding-left: 10px;
    justify-content: center;
    align-content: center;
    color: ${Colors.accentDark};

    &:hover {
        fill: ${Colors.primeDark};
    }
`;

export const CodeLink = Styled(CodeIcon)`
    height: 50px;
    width: 25px;
`;

export const BrowserLink = Styled(BrowserIcon)`
    height: 50px;
    width: 25px;
`;

export const LinkText = Styled.div`
    align-self: center;
    font-size: 20px;
`;

export const ProjectCardContainer = Styled.div`
    height: 550px;
    min-width: 300px;
    background: ${Colors.accentLight};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    fill: ${Colors.accentDark};
    cursor: pointer;
    margin: 0px 20px;
    padding: 0px 20px;

    &:hover {
        color: ${Colors.accentLight};
        background: ${Colors.main};
        fill: ${Colors.accentLight};

        ${LinkContainer}{
            color: ${Colors.accentLight};
        }

        ${ProjectFooter} {
            color: ${props => props.isHover ? null : Colors.primeDark};
        }
    }
`;


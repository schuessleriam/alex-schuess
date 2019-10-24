import Styled from 'styled-components';
import {ReactComponent as BrowserIcon} from './../../assets/browser.svg';
import {ReactComponent as CodeIcon} from './../../assets/code.svg';

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
    width: 110px;
    height: auto;
`;

export const ProjectHeader = Styled.h2`
    text-align: center;
    font-size: 24px;
    margin: 0px;
`;

export const ProjectSubHeader = Styled.h3`
    text-align: center;
    font-size: 14px;
    margin: 0px;
`;

export const DescriptionContainer = Styled.span`
    text-align: center;
    font-size: 12px;
`;

export const ProjectFooter = Styled.h3`
    text-align: center;
    font-size: 14px;
    letter-spacing: 1px;
`;

export const LinkContainer = Styled.a`
    display: grid;
    grid-template-columns: 5vw 15vw;
    padding-left: 40px;
    justify-content: center;
    align-content: center;
    color: #5C7998;

    &:hover {
        color: #6EB4FF;
        fill: #6EB4FF;
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
`;

export const ProjectCardContainer = Styled.div`
    height: 450px;
    width: 25vw;
    background: #EFF1FA;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    fill: #5C7998;
    cursor: pointer;
    padding: 0px 20px;

    &:hover {
        color: #EFF1FA;
        background: linear-gradient(165deg, #EFF1FA 0%, #5C7998 40%, #4D6988 100%);
        fill: #EFF1FA;

        ${LinkContainer}{
            color: #EFF1FA;
        }

        ${ProjectFooter} {
            color: ${props => props.isHover ? null :'#6EB4FF'};
        }
    }
`;


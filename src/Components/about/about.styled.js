import Styled from 'styled-components';
import { Colors } from './../../global.styled';
import {ReactComponent as Location} from './../../assets/location.svg';
import {ReactComponent as NodeImage} from './../../assets/nodejs-icon.svg';


export const AboutContainer = Styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    color: ${Colors.primeDark};
`;

export const AboutHeader = Styled.h1`
    text-align: center;
    height: 150px;
    font-size: 54px;
    padding-top: 50px;
`;

export const AboutContent = Styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 95px 30% 1fr 50px;
    letter-spacing: 2px;
    line-height: 42px;

`;

export const ReactIcon = Styled.img`
    height: 400px;
    width: auto;
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    margin-top: -150px;
    margin-left: -200px;
    opacity: 0.5;
    z-index: 0;
`;

export const NodeIcon = Styled(NodeImage)`
    height: 300px;
    width: auto;
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    margin-top: 200px;
    margin-left: 150px;
    opacity: 0.5;
    z-index: 0;
`;

export const ReduxIcon = Styled.img`
    height: 300px;
    width: auto;
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    margin-top: 500px;
    margin-left: -50px;
    opacity: 0.5;
    z-index: 0;
`;

export const StyleBoxOne = Styled.div`
    margin-left: -300px;
    margin-top: -150px;
    grid-column: 1 / 3;
    grid-row: 1 / 4;
    opacity: 0.05;
    z-index: -1;
    width: 0;
    height: 0;
    border: 600px solid transparent;
    border-bottom-color: ${Colors.accentLight};
    position: relative;
    top: -600px;

    &:after {
    content: '';
    position: absolute;
    left: -600px;
    top: 600px;
    width: 0;
    height: 0;
    border: 600px solid transparent;
    border-top-color: ${Colors.accentLight};
`;

export const StyleBoxTwo = Styled.div`
    margin-left: -350px;
    grid-column: 1 / 3;
    grid-row: 1 / 4;
    opacity: 0.15;
    z-index: -1;
    width: 0;
    height: 0;
    border: 400px solid transparent;
    border-bottom-color: ${Colors.accentDark};
    position: relative;
    top: -400px;

    &:after {
    content: '';
    position: absolute;
    left: -400px;
    top: 400px;
    width: 0;
    height: 0;
    border: 400px solid transparent;
    border-top-color: ${Colors.accentDark};
`;

export const InfoBox = Styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 3 / 4;
    justify-content: ${props => props.isFooter ? 'space-evenly' : null};
    font-size: 26px;
    padding: 40px;
    z-index: 2;
    grid-row: ${props => props.education ? '1 / 2' : props.skills ? '2 / 3' :  '3 / 4' };
`;

export const ContentBox = Styled.div`
    opacity: 0.15;
    background: ${Colors.accentLight};
    grid-column: 3 / 4;
    grid-row: 1 / 4;
    z-index: 1;
`

export const InfoBoxHeader = Styled.h1`
    font-size: 36px;
    text-align: center;
    margin: 0px;
    padding-bottom: 20px;
`;

export const InfoBoxContentList = Styled.ul`
    list-style-type: circle;
    margin-left: 40px;
`;

export const InfoBoxContent = Styled.div`
    text-align: center;
`;

export const InfoHighlight= Styled.span`
    color: ${Colors.accentLight};
`;

export const LocationContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-left: -10px;
    padding-bottom: 40px;
`;

export const LocationIcon = Styled(Location)`
    fill: ${Colors.primeDark};
    height: 40px;
    width: 20px;
`;

export const LocationText = Styled.span`
    font-size: 28px;
`;

export const ButtonContainer = Styled.div`
    display: flex;
    justify-content: center;
`;


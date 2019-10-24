import Styled from 'styled-components';
import {ReactComponent as Location} from './../../assets/location.svg';
import {ReactComponent as NodeImage} from './../../assets/nodejs-icon.svg';


export const AboutContainer = Styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
`;

export const AboutHeader = Styled.h1`
    text-align: center;
    height: 150px;
    font-size: 54px;
    padding-top: 50px;
`;

export const AboutContent = Styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 95px 30vw 1fr 50px;
    grid-template-rows: 300px 350px 200px;
    grid-gap: 20px;
    letter-spacing: 2px;
    line-height: 42px;
`;

export const ReactIcon = Styled.img`
    height: 170px;
    width: auto;
    grid-column: 2 / 3;
    grid-row: 1 / 4;
`;

export const NodeIcon = Styled(NodeImage)`
    height: 170px;
    width: auto;
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    margin-left: 250px;
    margin-top: 300px;
`;

export const ReduxIcon = Styled.img`
    height: 170px;
    width: auto;
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    margin-top: 600px;
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
    border: 800px solid transparent;
    border-bottom-color: white;
    position: relative;
    top: -800px;

    &:after {
    content: '';
    position: absolute;
    left: -800px;
    top: 800px;
    width: 0;
    height: 0;
    border: 800px solid transparent;
    border-top-color: white;
`;

export const StyleBoxTwo = Styled.div`
    margin-left: -250px;
    grid-column: 1 / 3;
    grid-row: 1 / 4;
    opacity: 0.05;
    z-index: -1;
    width: 0;
    height: 0;
    border: 400px solid transparent;
    border-bottom-color: white;
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
    border-top-color: white;
`;

export const InfoBox = Styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 3 / 4;
    justify-content: ${props => props.isFooter ? 'space-evenly' : null};
    font-size: 26px;
    padding-bottom: 20px;
`;

export const InfoBoxHeader = Styled.h1`
    font-size: 36px;
    text-align: center;
    color: white;
    margin: 0px;
    padding-bottom: 20px;
`;

export const InfoBoxContentList = Styled.ul`
    list-style-type: circle;
    margin-left: 40px;
`;

export const InfoBoxContent= Styled.div`
    text-align: center;
`;

export const LocationContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    color: white;
    margin-left: -10px;
    padding-bottom: 40px;
`;

export const LocationIcon = Styled(Location)`
    fill: white;
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


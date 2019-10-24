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
    grid-template-columns: 95px 35vw 1fr 50px;
    grid-template-rows: 270px 250px 200px;
    grid-gap: 20px;
    letter-spacing: 2px;
    line-height: 30px;
`;

export const ReactIcon = Styled.img`
    height: 170px;
    width: auto;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-top: 2vw;
    margin-left: 1vw;
`;

export const NodeIcon = Styled(NodeImage)`
    height: 170px;
    width: auto;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    margin-left: 20vw;
    margin-top: -8vw;
`;

export const ReduxIcon = Styled.img`
    height: 170px;
    width: auto;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    margin-top: -10vw;
    margin-left: 5vw;
`;

export const StyleBox = Styled.div`
    margin-top: 85px;
    margin-left: 10px;
    grid-column: 1 / 3;
    grid-row: 1 / 4;
    opacity: 0.1;

      width: 0;
      height: 0;
      border: 200px solid transparent;
      border-bottom-color: white;
      position: relative;
      top: -200px;

      &:after {
      content: '';
      position: absolute;
      left: -200px;
      top: 200px;
      width: 0;
      height: 0;
      border: 300px solid transparent;
      border-top-color: white;
`;

export const InfoBox = Styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 3 / 4;
    justify-content: ${props => props.isFooter ? 'space-evenly' : null};
`;

export const InfoBoxHeader = Styled.h1`
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
`;

export const LocationIcon = Styled(Location)`
    fill: white;
    height: 40px;
    width: 20px;
`;

export const LocationText = Styled.span`
    margin-top: 5px;
    font-size: 22px;
`;

export const ButtonContainer = Styled.div`
    display: flex;
    justify-content: center;
`;


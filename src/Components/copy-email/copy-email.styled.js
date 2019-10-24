import Styled, { css } from 'styled-components';
import {ReactComponent as EmailIcon} from './../../assets/mail.svg';
import {ReactComponent as ClippyIcon} from './../../assets/clippy.svg';
import {ReactComponent as CheckIcon} from './../../assets/check.svg';

export const CopyEmailContainer = Styled.div`
    fill: white;
`;

const IconStyles = css`
    height: 50px;
    width: 25px;
    cursor: pointer;
    color: white;
`;

const IconStylesBigger = css`
    height: 100px;
    width: 50px;
    cursor: pointer;
    color: white;
`;

const GetIconStyles = (props) => {
    if(props.bigger){
        return IconStylesBigger;
    }else{
        return IconStyles;
    }
}

export const Email = Styled(EmailIcon)`
    ${GetIconStyles};
`;

export const Clippy = Styled(ClippyIcon)`
    ${GetIconStyles};
`;

export const Check = Styled(CheckIcon)`
    ${GetIconStyles};
`;

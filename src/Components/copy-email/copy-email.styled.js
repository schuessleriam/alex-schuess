import Styled, { css } from 'styled-components';
import {ReactComponent as EmailIcon} from './../../assets/mail.svg';
import {ReactComponent as ClippyIcon} from './../../assets/clippy.svg';
import {ReactComponent as CheckIcon} from './../../assets/check.svg';
import { Colors } from './../../global.styled';

export const CopyEmailContainer = Styled.div`
    cursor: pointer;
`;

const IconStyles = css`
    height: 50px;
    width: 25px;
    fill: ${Colors.primeDark};
`;

const IconStylesBigger = css`
    height: 100px;
    width: 50px;
    fill: ${Colors.accentLight};
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

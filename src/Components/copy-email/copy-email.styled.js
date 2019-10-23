import Styled, { css } from 'styled-components';
import {ReactComponent as EmailIcon} from './../../assets/mail.svg';
import {ReactComponent as ClippyIcon} from './../../assets/clippy.svg';
import {ReactComponent as CheckIcon} from './../../assets/check.svg';

export const CopyEmailContainer = Styled.div`
    padding: 10px;
    font-size: 18px;
    fill: white;
`;

const IconStyles = css`
    height: 40px;
    width: 20px;
    margin-top: 3px;
    cursor: pointer;
    color: white;
`;

export const Email = Styled(EmailIcon)`
    ${IconStyles};
`;

export const Clippy = Styled(ClippyIcon)`
    ${IconStyles};
`;

export const Check = Styled(CheckIcon)`
    ${IconStyles};
`;

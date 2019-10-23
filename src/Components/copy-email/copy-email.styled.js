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

export const Email = Styled(EmailIcon)`
    ${IconStyles};
`;

export const Clippy = Styled(ClippyIcon)`
    ${IconStyles};
`;

export const Check = Styled(CheckIcon)`
    ${IconStyles};
`;

import Styled from 'styled-components';
import CustomButton from './../custom-button/custom-button.component.jsx';

export const FooterContainer = Styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    align-self: center;
`;

export const ReturnButton = Styled(CustomButton)`
    align-self: center;
`;

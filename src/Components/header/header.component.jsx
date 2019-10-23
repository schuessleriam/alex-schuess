import React from 'react';
import { HeaderContainer, LinkContainer, GithubLink } from './header.styled.js';
import CopyEmail from '../copy-email/copy-email.component.jsx';

const Header = () => (
    <HeaderContainer>
        <CopyEmail/>
        <LinkContainer href="https://github.com/schuessleriam">
            <GithubLink/>
        </LinkContainer>
    </HeaderContainer>
);

export default Header;


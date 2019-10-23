import React from 'react';
import { HeaderContainer,
    LinksContainer, 
    LinkContainer, 
    GithubLink,
    TabsContainer,
    TabContainer
} from './header.styled.js';
import CopyEmail from '../copy-email/copy-email.component.jsx';

const Header = () => (
    <HeaderContainer>
        <LinksContainer>
            <LinkContainer>
                <CopyEmail/>
            </LinkContainer>
            <LinkContainer href="https://github.com/schuessleriam">
                <GithubLink/>
            </LinkContainer>
        </LinksContainer>

        <TabsContainer>
            <TabContainer>Home</TabContainer>
            <TabContainer>About</TabContainer>
            <TabContainer>Projects</TabContainer>
        </TabsContainer>
    </HeaderContainer>
);

export default Header;


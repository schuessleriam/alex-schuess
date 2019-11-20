import React from 'react';
import { scroller } from 'react-scroll';
import { HeaderContainer,
    LinksContainer, 
    LinkContainer, 
    GithubLink,
    TabsContainer,
    TabContainer,
    HeaderBack,
    HeaderBlur
} from './header.styled.js';
import CopyEmail from '../copy-email/copy-email.component.jsx';

const Header = () => {

    const scrollTo = (destination, offset) => {
        scroller.scrollTo(destination, {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: offset
        })
      }

    return (
        <div>
        <HeaderBlur/>
        <HeaderBack/>
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
                <TabContainer onClick={() => scrollTo('home')}>Home</TabContainer>
                <TabContainer onClick={() => scrollTo('about', 50)}>About</TabContainer>
                <TabContainer onClick={() => scrollTo('projects')}>Projects</TabContainer>
            </TabsContainer>
        </HeaderContainer>
        </div>
    );
}

export default Header;


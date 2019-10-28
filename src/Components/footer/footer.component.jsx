import React from 'react';
import { scroller } from 'react-scroll';
import { FooterContainer, ReturnButton } from './footer.styled.js';

const Footer = () => (
    <FooterContainer>
        <ReturnButton onClick={() => 
            scroller.scrollTo('home', {
                duration: 1000,
                delay: 0,
                smooth: 'easeInOutQuart'
          })}>
          Return To Top
          </ReturnButton>
    </FooterContainer>
);

export default Footer;
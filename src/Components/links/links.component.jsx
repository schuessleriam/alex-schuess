import React from 'react';
import { LinksContainer, LinksHeader, LinkContainer, LinkText, LinkGithub, LinkResume, StyleBox } from './links.styled.js';
import CopyEmail from './../copy-email/copy-email.component';

const Links = () => (
    <LinksContainer>
        <LinksHeader>Email & Links</LinksHeader>
        <LinkContainer href="https://github.com/schuessleriam">
            <LinkGithub/>
            <LinkText>Visit My Github</LinkText>
        </LinkContainer>
        <LinkContainer>
            <CopyEmail bigger/>
            <LinkText>Copy My Email</LinkText>
        </LinkContainer>
        <LinkContainer>
            <LinkResume/>
            <LinkText>Download My Resume</LinkText>
        </LinkContainer>
        <StyleBox/>
    </LinksContainer>
);

export default Links;
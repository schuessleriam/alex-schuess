import React from 'react';
import Photo from './../../assets/coverPhoto.jpg';
import { HomePageContainer,
     CoverPhotoContainer, 
     HomePageContent, 
     Greeting,
     Description,
     ProjectsButton,
     StyleBox
    } from './home.styled';

const Home = () => (
    <HomePageContainer>
        <HomePageContent>
            <Greeting>Hi, I'm Alex</Greeting>
            <Description>Web Developer</Description>
            <ProjectsButton inverted>See Projects</ProjectsButton>
            <StyleBox/>
        </HomePageContent>
        <CoverPhotoContainer src={Photo}/>
    </HomePageContainer>
);

export default Home;
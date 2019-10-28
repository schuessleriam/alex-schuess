import React from 'react';
import { scroller } from 'react-scroll';
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
            <ProjectsButton inverted onClick={() => 
                scroller.scrollTo('projects', {
                    duration: 1000,
                    delay: 0,
                    smooth: 'easeInOutQuart'
              })}>
              See Projects
              </ProjectsButton>
            <StyleBox/>
        </HomePageContent>
        <CoverPhotoContainer src={Photo}/>
    </HomePageContainer>
);

export default Home;
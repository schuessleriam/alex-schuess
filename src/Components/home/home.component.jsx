import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import Photo from './../../assets/coverPhoto.jpg';
import { HomePageContainer,
     CoverPhotoContainer,
     PreCoverPhotoContainer, 
     HomePageContent, 
     Greeting,
     Description,
     ProjectsButton,
     StyleBox
    } from './home.styled';

const Home = () =>{

    const [imgLoaded, setImgLoaded] = useState({status: false});

    return (
        <HomePageContainer>
            <HomePageContent>
                <Greeting>Welcome, I'm Alex</Greeting>
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
            {imgLoaded.status === false ? <PreCoverPhotoContainer/> : null}
            <CoverPhotoContainer src={Photo} onLoad={() => setImgLoaded({status: true})}/>
        </HomePageContainer>
    );
}

export default Home;
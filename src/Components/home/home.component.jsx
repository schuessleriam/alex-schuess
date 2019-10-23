import React from 'react';
import Photo from './../../assets/coverPhoto.jpg';
import { HomePageContainer,
     CoverPhotoContainer, 
     HomePageContent, 
     Greeting
    } from './home.styled';

const Home = () => (
    <HomePageContainer>
        <HomePageContent>
            <Greeting>Hi, I'm Alex</Greeting>
        </HomePageContent>
        <CoverPhotoContainer src={Photo}/>
    </HomePageContainer>
);

export default Home;
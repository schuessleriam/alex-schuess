import React from 'react';
import { Element } from 'react-scroll';
import About from '../../components/about/about.component';
import Projects from '../../components/projects/projects.component';
import Links from '../../components/links/links.component';
import Footer from '../../components/footer/footer.component';
import Home from '../../components/home/home.component';
import Header from '../../components/header/header.component';

const Main = () => (
    <div>
        <Header/>
        <Element name="home"><Home/></Element>
        <Element name="about"><About/></Element>
        <Element name="projects"><Projects/></Element>
        <Links/>
        <Footer/>
    </div>
);
  
export default Main;
    
    
    
    
    
   
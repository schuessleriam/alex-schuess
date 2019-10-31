import React, { Suspense } from 'react';
import { AppContainer, GlobalStyle } from './global.styled';
import { Element } from 'react-scroll';

import Header from './components/header/header.component';
import About from './components/about/about.component';
import Projects from './components/projects/projects.component';
import Links from './components/links/links.component';
import Footer from './components/footer/footer.component';
import Home from './components/home/home.component';

const App = () => (
  <Suspense fallback={<div>Loading</div>}>
  <AppContainer>
    <GlobalStyle/>
    <Header/>
      <Element name="home"><Home/></Element>
      <Element name="about"><About/></Element>
      <Element name="projects"><Projects/></Element>
      <Links/>
      <Footer/>
  </AppContainer>
  </Suspense>
);

export default App;

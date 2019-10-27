import React from 'react';
import { AppContainer, GlobalStyle } from './global.styled';

import Header from './components/header/header.component';
import Home from './components/home/home.component';
import About from './components/about/about.component';
import Projects from './components/projects/projects.component';
import Links from './components/links/links.component';
import Footer from './components/footer/footer.component';

const App = () => (
  <AppContainer>
    <GlobalStyle/>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Links/>
    <Footer/>
  </AppContainer>
);

export default App;

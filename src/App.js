import React from 'react';
import { GlobalStyle } from './global.styled';

import Header from './Components/header/header.component';
import Home from './Components/home/home.component';
import About from './Components/about/about.component';
import Projects from './Components/projects/projects.component';
import Links from './Components/links/links.component';
import Footer from './Components/footer/footer.component';

const App = () => (
  <div>
    <GlobalStyle/>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Links/>
    <Footer/>
  </div>
);

export default App;

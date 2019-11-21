import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppContainer, GlobalStyle } from './global.styled';

import Main from './pages/main/main.component.jsx';
import Project from './pages/project/project.component.jsx';

const App = () => (
  <Suspense fallback={<div>Loading</div>}>
  <AppContainer>
    <GlobalStyle/>
    <Switch>
      <Route exact path="/" component = {Main}/>
      <Route path="/projects" component = {Project}/> 
    </Switch>
  </AppContainer>
  </Suspense>
);

export default App;

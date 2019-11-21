import React from 'react';
import { Route } from 'react-router-dom';
import Projects from '../../components/projects/projects.component';
import ProjectInfo from '../../components/project-info/project-info.component';

const Project = ({ match }) => (
    <div>
        <Route 
            exact path={`${match.path}`} 
            component={Projects} 
        />

        <Route 
            path={`${match.path}/:infoPage`} 
            component={ProjectInfo}
        />    
    </div>
);

export default Project;
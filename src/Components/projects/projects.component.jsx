import React from 'react';
import { ProjectsContainer, ProjectsHeader, ProjectsContent } from './projects.styled';
import ProjectCard from '../project-card/project-card.component';
import BalbatrossIcon from '../../assets/balbatross-01.png';
import TerminalIcon from '../../assets/terminal.svg';
import DBIcon from '../../assets/database.svg';

const Projects = () => { 
    return (
        <ProjectsContainer>
            <ProjectsHeader>Recent Projects</ProjectsHeader>
            <ProjectsContent>
                <ProjectCard livePage="https://balbatross.herokuapp.com"
                    title="Balbatross Apperal"
                    subTitle="A React App"
                    repo='https://github.com/schuessleriam/balbatross'
                    projectImage={BalbatrossIcon}
                    description="A fake but fully operational online store. 
                    Browse, add to your cart, create an account, and checkout."
                />
                <ProjectCard 
                    title="Lutheran High School Directory"
                    subTitle="A Data Managment System"
                    repo='https://github.com/schuessleriam/LHSD'
                    projectImage={DBIcon}
                    description="A modernized and extended digital tool suite used to generate the 
                    multiple formats of the Valparaiso University Lutheran High School Directory."
                />
                <ProjectCard livePage="https://win-shifter.schuessleriam.repl.run"
                    title="Season Shifter"
                    subTitle="A Command Line App"
                    repo='https://github.com/schuessleriam/Win-Shifter'
                    projectImage={TerminalIcon}
                    description="Were they lucky? Do they operate outside the grand numbers?
                    See how the last Milwaukee Brewers Season adds up."
                />
            </ProjectsContent>
        </ProjectsContainer>
    );
}

export default Projects;
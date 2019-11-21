import React from 'react';
import { ProjectInfoContainer, ProjectInfoContent, ProjectHeader, ProjectSubHeader, 
    ProjectSection, SectionText, SectionList
} from './project-info.styled.js';

const WinShifterInfo = () => (
    <ProjectInfoContainer>
        <ProjectInfoContent>
            <ProjectHeader>Season Shifter - A Command Line App</ProjectHeader>
            <ProjectSubHeader>About</ProjectSubHeader>
            <ProjectSection>
                <SectionText>
                As a baseball fan, specifically a brewer fan, I noticed some patterns and became curious to what the 
                team's record would be if I simply shifted their runs allowed against their runs scored. With such a 
                large amount of games played, this was actually a difficult answer to solve. I created this little program to 
                satisfy my curiosity. 
                </SectionText>
            </ProjectSection>
            <ProjectSubHeader>Try it Out</ProjectSubHeader>
            <ProjectSection>
                <iframe height="600px" width="80%" src="https://win-shifter.schuessleriam.repl.run" 
                scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" 
                sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
                title='repl'/>
            </ProjectSection>
            <ProjectSubHeader>Built With</ProjectSubHeader>
            <ProjectSection>
                <SectionList>
                    <li>Node.js</li>
                </SectionList>
            </ProjectSection>
        </ProjectInfoContent>
    </ProjectInfoContainer>
);

export default WinShifterInfo;
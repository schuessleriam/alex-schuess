import React, { useState } from 'react';
import ProjectInfo from './../project-info/project-info.component';

import { ProjectCardContainer, 
    ProjectHeader, 
    ProjectFooter, 
    LinkContainer, 
    CodeLink, 
    BrowserLink, 
    ProjectSubHeader,
    DescriptionContainer, 
    HeaderImageContainer,
    HeaderImage,
    LinkText
} from './project-card.styled';



const ProjectCard = ({
    infoPage, 
    livePage,
    livePageTitle, 
    repo, 
    projectImage, 
    title, 
    subTitle, 
    description}) => {

    const [linkHover, setLinkHover] = useState({isHover: false});
    const [moreInfo, setMoreInfo] = useState({show: false});

    const handleHover = () => {
        setLinkHover({isHover: true});
    }

    const handleNoHover = () => {
        setLinkHover({isHover: false});
    }

    return (
        <ProjectCardContainer {...linkHover} onClick={linkHover.isHover ? null : () => setMoreInfo({show: !moreInfo.show})}>
            <HeaderImageContainer>
                <HeaderImage src={projectImage}/> 
            </HeaderImageContainer>
            <ProjectHeader>{title}</ProjectHeader>
            <ProjectSubHeader>{subTitle}</ProjectSubHeader>
            <DescriptionContainer>{description}</DescriptionContainer>
            { livePage ?
                <LinkContainer href={livePage} onMouseEnter={handleHover} onMouseLeave={handleNoHover}> 
                    <BrowserLink/> 
                    <LinkText>{livePageTitle}</LinkText> 
                </LinkContainer>
            : <div/>
            }
            <LinkContainer href={repo} onMouseEnter={handleHover} onMouseLeave={handleNoHover}> 
                <CodeLink/> 
                <LinkText>See The Code</LinkText> 
            </LinkContainer>
            <ProjectFooter>Click To Learn More</ProjectFooter>

            { moreInfo.show ? <ProjectInfo infoPage={infoPage}/> : null}
        </ProjectCardContainer>
    );
}

export default ProjectCard;
import React from 'react';
import { AboutContainer,
         AboutHeader, 
         AboutContent,
         InfoBox,
         InfoBoxContent,
         InfoHighlight,
         InfoBoxHeader,
         ButtonContainer,
         LocationContainer,
         LocationIcon,
         LocationText,
         StyleBoxOne,
         StyleBoxTwo,
         ReduxIcon,
         ReactIcon,
         NodeIcon,
         ContentBox
} from './about.styled';
import CustomButton from '../custom-button/custom-button.component';
import ReduxImage from './../../assets/reduxlogo.png';
import ReactImage from './../../assets/reactlogo.png';

const About = () => (
    <AboutContainer>
        <AboutHeader>About Me</AboutHeader>
        <AboutContent>

            <StyleBoxOne/>
            <StyleBoxTwo/>
            <ReduxIcon src={ReduxImage}/>
            <ReactIcon src={ReactImage}/>
            <NodeIcon/>
            <ContentBox/>
            <InfoBox education>
                <InfoBoxHeader>Education</InfoBoxHeader>
                <InfoBoxContent>
                    <span>
                        I received my Bachelor of Science in <InfoHighlight>Computer Science</InfoHighlight>, 
                        with a Minor in Mathematics, from <InfoHighlight>Valparaiso University</InfoHighlight>. 
                        While at Valpo, I competed in <InfoHighlight>NCAA D1 Track & Field</InfoHighlight> and achieved 
                        Horizon League Academic Honor Roll. 
                        I was a Presidential Scholarship Recipient and graduated <InfoHighlight>magna cum laude</InfoHighlight>.
                    </span>
                </InfoBoxContent>
            </InfoBox>
            <InfoBox skills>
                <InfoBoxHeader>Related Skills</InfoBoxHeader>

                <InfoBoxContent>
                    <span>
                        My web development experience begins with a strong understanding of 
                        <InfoHighlight>&nbsp;HTML/CSS</InfoHighlight>. 
                        <InfoHighlight>&nbsp;JavaScript&nbsp;</InfoHighlight>
                        is my language of choice, where lies experience in 
                        <InfoHighlight>&nbsp;React</InfoHighlight>, 
                        including 
                        <InfoHighlight>&nbsp;Redux</InfoHighlight>,
                        <InfoHighlight>&nbsp;Redux Sagas</InfoHighlight>, 
                        and 
                        <InfoHighlight>&nbsp;Styled Components</InfoHighlight>. 
                        I have worked with 
                        <InfoHighlight>&nbsp;jQuery&nbsp;</InfoHighlight>
                        (<InfoHighlight>Ajax</InfoHighlight>) 
                        alongside 
                        <InfoHighlight>&nbsp;PHP</InfoHighlight>, 
                        and with 
                        <InfoHighlight>&nbsp;Node.js&nbsp;</InfoHighlight>
                        comes more experience in 
                        <InfoHighlight>&nbsp;ES6</InfoHighlight>. 
                        My database experience comes in both 
                        <InfoHighlight>&nbsp;SQL&nbsp;</InfoHighlight>
                        form and NoSQL form through 
                        <InfoHighlight>&nbsp;Firebase</InfoHighlight>. 
                    </span>
                </InfoBoxContent>


            </InfoBox>
            <InfoBox isFooter>
                <LocationContainer>
                    <LocationIcon/>
                    <LocationText>&nbsp;&nbsp;Milwaukee, WI</LocationText>
                </LocationContainer>
                <ButtonContainer>
                    <CustomButton>Download Resume</CustomButton>
                </ButtonContainer>
            </InfoBox>
        </AboutContent>
    </AboutContainer>
);

export default About;
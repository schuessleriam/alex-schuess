import React from 'react';
import { AboutContainer,
         AboutHeader, 
         AboutContent,
         InfoBox,
         InfoBoxContent,
         InfoBoxContentList,
         InfoBoxHeader,
         ButtonContainer,
         LocationContainer,
         LocationIcon,
         LocationText,
         StyleBox,
         ReduxIcon,
         ReactIcon,
         NodeIcon
} from './about.styled';
import CustomButton from '../custom-button/custom-button.component';
import ReduxImage from './../../assets/reduxlogo.png';
import ReactImage from './../../assets/reactlogo.png';

const About = () => (
    <AboutContainer>
        <AboutHeader>About Me</AboutHeader>
        <AboutContent>
            <StyleBox/>
            <ReduxIcon src={ReduxImage}/>
            <ReactIcon src={ReactImage}/>
            <NodeIcon/>
            <InfoBox>
                <InfoBoxHeader>Education</InfoBoxHeader>
                <InfoBoxContent education>
                    <span>
                        I recieved my Bachelors of Science in Computer Science, with a Minor in Mathematics, 
                        from Valparaiso University. While at Valpo, I compeated in NCAA D1 Track & Field and achieved 
                        Horizon League Academic Honor Roll. I was a Presidential Scholarship Recipient and graduated 
                        magna cum laude.
                    </span>
                </InfoBoxContent>
            </InfoBox>
            <InfoBox>
                <InfoBoxHeader>Techinical Skills</InfoBoxHeader>
                <InfoBoxContentList>
                    <li>HTML/CSS, PHP</li>
                    <li>JavaScript:</li>
                    <InfoBoxContentList>
                        <li>React.js: Redux (Sagas), Styled Components</li> 
                        <li>ES6, Node.js, jQuery (Ajax)</li>
                    </InfoBoxContentList>
                    <li>SQL, Firebase</li>
                    <li>Java, Ruby, Python, C#</li>
                </InfoBoxContentList>
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
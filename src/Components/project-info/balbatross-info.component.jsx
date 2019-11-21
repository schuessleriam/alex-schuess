import React from 'react';
import { ProjectInfoContainer, ProjectInfoContent, ProjectHeader, ProjectSubHeader, 
    ProjectSection, SectionText, SectionList, SectionImage, ProjectSectionWithImage, InlineLink 
} from './project-info.styled.js';
import Photo from './../../assets/StripeExample.gif';

const BalbatrossInfo = () => (
    <ProjectInfoContainer>
        <ProjectInfoContent>
            <ProjectHeader>Balbatross Apparel - A React App</ProjectHeader>
            <ProjectSubHeader>About</ProjectSubHeader>
            <ProjectSection>
                <SectionText>
                    This e-commerce platform allows the shopping experience through multiple collections. The collections are 
                    stored in a Firebase Firestore and contributed across the site from there. Users can create an 
                    account with their email or Google account fast and secure using the Firebase Auth Library.
                    On the frontend, data is then stored in a Redux store, and async actions (like signing in)
                    are handled with Redux Sagas. Scroll through the site, add to your cart, and even checkout
                    using Stripe checkout. 
                    Visit <InlineLink href ='https://balbatross.herokuapp.com/'>balbatross.herokuapp.com</InlineLink> to try it out yourself. 
                </SectionText>
            </ProjectSection>
            <ProjectSubHeader>Some Behind the Scenes:</ProjectSubHeader>
            <ProjectSectionWithImage>
                <SectionText>The Stripe Payment system allows for transactions to be processed. Once the Payment is processed
                it is immediately available in the console for our imaginary owners to use. The checkout returns a success message
                that in the real world could be used to process the order and get the actual contents to the customer. </SectionText>
                <SectionImage src={Photo} alt='Stripe Checkout Example'/>
            </ProjectSectionWithImage>
            <ProjectSubHeader>Built With</ProjectSubHeader>
            <ProjectSection>
                <SectionList>
                    <li>React.js</li>
                    <li>Express.js</li>
                    <li>Redux and Redux Sagas</li>
                    <li>Styled Components</li>
                    <li>Firebase</li>
                    <li>Stripe</li>
                </SectionList>
            </ProjectSection>
        </ProjectInfoContent>
    </ProjectInfoContainer>
);

export default BalbatrossInfo;
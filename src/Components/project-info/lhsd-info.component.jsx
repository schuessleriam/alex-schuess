import React from 'react';
import { ProjectInfoContainer, ProjectInfoContent, ProjectHeader, ProjectSubHeader, 
    ProjectSection, SectionText, SectionList, SectionImage, ProjectSectionWithImage, 
    ExitText, InlineLink, Spacer 
} from './project-info.styled.js';
import AddSchool from './../../assets/add_school.gif';
import AdminExport from './../../assets/admin_export.gif';
import EditSchool from './../../assets/edit_school_admin.gif';
import ReviewTab from './../../assets/review_tab.gif';

const LhsdInfo = () => (
    <ProjectInfoContainer>
        <ProjectInfoContent>
            <ProjectHeader>VU Lutheran High School Directory - A Data Management System</ProjectHeader>
            <ProjectSubHeader>About</ProjectSubHeader>
            <ProjectSection>
                <SectionText>
                This web app was created using a Linux - Apache - MySQL - PHP stack. 
                The application was built for the office of church relations to better handle 
                their high school directory, at all levels. Our goal was to create a centralized
                system that allowed for one source of entry and update across all forms of the directory. 
                The publicly viewable portion of this application can be 
                found <InlineLink href='https://www.valpo.edu/church-relations/lhs-directory/'>Here.</InlineLink>
                </SectionText>
            </ProjectSection>

            <ProjectSectionWithImage>
                
                <SectionText>
                <ProjectSubHeader>Adding New Data</ProjectSubHeader>
                Under the 'new' tab, an Admin can add a new school into the system 
                with all relevant information for the initial year. An admin can also add
                other organizations the office stores, and add to the list of titles individual
                school administrators can pick from.  </SectionText>
                <SectionImage src={AddSchool} alt='Add School Example'/>
            </ProjectSectionWithImage>

            <Spacer/>
            
            <ProjectSectionWithImage>
               
                <SectionText> 
                <ProjectSubHeader>Updates and Review</ProjectSubHeader>
                After a school exists in the system, data can be altered and updated.
                School Administrators can update their yearly info directly into the central database.
                After information has been altered, a directory admin can review the changes and 
                choose to accept or deny the update. 
                   </SectionText>
                <SectionImage src={ReviewTab} alt='Review School Example'/>
            </ProjectSectionWithImage>

            <Spacer/>

            <ProjectSectionWithImage>
                
                <SectionText>
                <ProjectSubHeader>Admin Updates</ProjectSubHeader>
                Although school administrators can make updates directly, a directory 
                admin may need to alter data. To do this, the admin is given the option to update
                any data directly inside the admin page. These changes are logged as well.</SectionText>
                <SectionImage src={EditSchool} alt='Edit School Example'/>
            </ProjectSectionWithImage>

            <Spacer/>

            <ProjectSectionWithImage>
                
                <SectionText>
                <ProjectSubHeader>Exporting</ProjectSubHeader>
                To achieve single data entry across all systems, a directory admin 
                can export the current directory in multiple forms. Exported data can then be used 
                for long term storage, information merges, and use in the directory's publication form. </SectionText>
                <SectionImage src={AdminExport} alt='Export Example'/>
            </ProjectSectionWithImage>
            <ProjectSubHeader>Built With</ProjectSubHeader>
            <ProjectSection>
                <SectionList>
                    <li>PHP</li>
                    <li>jQuery (Ajax)</li>
                    <li>MySQL</li>
                    <li>Google Maps API</li>
                </SectionList>
            </ProjectSection>
            <ExitText>click anywhere to close</ExitText>
        </ProjectInfoContent>
    </ProjectInfoContainer>
);

export default LhsdInfo;
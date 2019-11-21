import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

import BalbatrossInfo from './balbatross-info.component';
import WinShifterInfo from './win-shifter-info.component';
import LhsdInfo from './lhsd-info.component';

import { ClosePage } from './project-info.styled.js';

const ProjectInfo = ({ match, history }) => {
    const infoPage = match.params.infoPage;
    useEffect(() => { 
        animateScroll.scrollToTop();
    }, []);

    return(
        <div>
            <ClosePage onClick={() => history.replace('')}>&#10005;</ClosePage>
            {
                infoPage === 'balbatross' ? <BalbatrossInfo/> : 
                infoPage === 'shifter' ? <WinShifterInfo/> :
                infoPage === 'lhsd' ? <LhsdInfo/> :
                <div>Something Went Wrong.</div>
            }
        </div>
    );
}

export default withRouter(ProjectInfo);
import React from 'react';
import BalbatrossInfo from './balbatross-info.component';
import WinShifterInfo from './win-shifter-info.component';
import LhsdInfo from './lhsd-info.component';

const ProjectInfo = ({ infoPage }) => {
    if (infoPage === 'balbatross'){
        return <BalbatrossInfo/>
    }else if (infoPage === 'shifter'){
        return <WinShifterInfo/>
    }else if (infoPage === 'lhsd'){
        return <LhsdInfo/>
    }else{
        return <div>Something Went Wrong.</div>
    }
}

export default ProjectInfo;
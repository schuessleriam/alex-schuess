import React, { useState } from 'react';
import {CopyEmailContainer, Clippy, Email, Check} from './copy-email.styled';


const CopyEmail = () => {

    const [emailHover, setEmailHover] = useState({
        show: false,
        copied: false
    });

    const handleEmailHover = () => {
        setEmailHover({...emailHover, show: true});
    }

    const handleNoEmailHover = () => {
        setEmailHover({...emailHover, show: false});
    }

    const handleEmailCopy = () => {
        if (document.queryCommandSupported('copy')){
            const address = document.createElement('textarea');
            address.innerText = 'as@schuess.com';
            document.body.appendChild(address);
            address.select();
            document.execCommand('copy');
            address.remove();
        }

        setEmailHover({
            ...emailHover, 
            copied: true
        });
    }

    return (
        <CopyEmailContainer 
            onClick={handleEmailCopy}
            onMouseEnter={handleEmailHover}
            onMouseLeave={handleNoEmailHover}
        >   
            {
            emailHover.show && emailHover.copied ? 
                <Check/>
            : emailHover.show ?
                <Clippy/> 
            :
                <Email/> 
            }        
        </CopyEmailContainer>
    );
}

export default CopyEmail;
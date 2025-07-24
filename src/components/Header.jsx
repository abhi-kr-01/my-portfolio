import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'



function Header(){
    return(
        <>
            <div className="header">
                <div className="header-content">
                    <div className="header-name">
                        <h2>ABHISHEK KUMAR</h2>
                    </div>
                    <div className="header-details">
                        <h2>Home</h2>
                        <h2>About</h2>
                        <h2>Experience</h2>
                        <h2>Projects</h2>
                        <h2>Contact</h2>
                    </div>
                    <div className="header-contact-logo">
                        <div className="header-conact-logo-linkedin">
                            <a href='https://linkedin.com' target='_blank'>
                                <FontAwesomeIcon icon={faLinkedin} size='xl'/>
                            </a>
                        </div>
                        <div className="header-conact-logo-X">
                            <a href='https://X.com' target='_blank'>
                                <FontAwesomeIcon icon={faTwitter} size='xl'/>
                            </a>
                        </div>
                        <div className="header-conact-logo-github">
                            <a href='https://github.com' target='_blank'>
                                <FontAwesomeIcon icon={faGithub} size='xl'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Header;
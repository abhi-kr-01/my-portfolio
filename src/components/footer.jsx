import React from'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = ()=>{
    return(
        <>
            <div className="footer">
                <div className="footer-up">
                    <div className='footer-Name'>
                        <h1>ABHISHEK KUMAR</h1>         <hr/>               
                        <span> <h5>Building The Future in web3 And </h5>
                        <h5>Deep Dive in Web World</h5> </span>
                    </div>
                    <div className='footer-Links'>
                        <h1>QUICK LINKS</h1>
                        <hr/>
                        <h3>About</h3>
                        <h3>Home</h3>
                        <h3>Experience</h3>
                        <h3>Projects</h3>
                        <h3>Contacts</h3>
                    </div>
                    <div className='footer-logo'>
                        <span><h1>Connect With Me</h1></span><hr/>
                        <div className='footer-connect'>
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
                <div className="footer-down">
                    <span>
                        <h3>@copyright 2025 Abhishek</h3>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer;
import React from 'react';
import githubLogo from '../image/logo/github.svg';
import linkedInLogo from '../image/logo/linkedin.svg'
import mailLogo from '../image/logo/mail.svg'

function Footer() {
    return (  
        <footer>
            <div className="d-flex justify-content-center">
                {/* <a id="profile-link" href="https://www.freecodecamp.org/jchen" target="_blank" rel="noopener nofollow">
                    <img src="" alt="freecodecamp logo" /> FreeCodeCamp
                </a> */}
                <a href="https://github.com/jchen2190" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} width="20" alt="github logo" />GitHub
                </a>
                <a href="https://www.linkedin.com/in/jonchen21" target="_blank" rel="noopener noreferrer">
                    <img src={linkedInLogo} width="20" alt="linkedin logo" />LinkedIn
                </a>
                <a href="mailto:jchen2190@gmail.com">
                    <img src={mailLogo} width="20" alt="email logo" />Email Me
                </a>
            </div>
            <p className="d-flex justify-content-center p-2 m-0">© 2023 Jon Chen.</p>
        </footer>
    );
}

export default Footer;
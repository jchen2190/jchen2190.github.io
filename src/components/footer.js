import React from 'react';

function Footer() {
    return (  
        <footer>
            <div class="footer-contain">
                {/* <a id="profile-link" href="https://www.freecodecamp.org/jchen" target="_blank" rel="noopener nofollow">
                    <img src="" alt="freecodecamp logo" /> FreeCodeCamp
                </a> */}
                <a class="social" href="https://github.com/jchen2190" target="_blank" rel="noopener noreferrer">
                    <img src="image/logo/github.svg" width="20" alt="github logo" />GitHub
                </a>
                <a class="social" href="https://www.linkedin.com/in/jonchen21" target="_blank" rel="noopener noreferrer">
                    <img src="image/logo/linkedin.svg" width="20" alt="linkedin logo" />LinkedIn
                </a>
                <a class="social" href="mailto:jchen2190@gmail.com">
                    <img src="image/logo/mail.svg" width="20" alt="email logo" />Email Me
                </a>
            </div>
            <p id="copyright">© 2023 Jon Chen.</p>
        </footer>
    );
}

export default Footer;
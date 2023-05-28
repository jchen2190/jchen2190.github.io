import React from 'react';
import downArrowIcon from '../image/icons/down-arrow-circle.svg'
import githubLogo from '../image/logo/github.svg';
import linkedInLogo from '../image/logo/linkedin.svg'

function Introduction() {
    return (  
        <section id="introduction">
            <h1>Hey, I'm</h1>
            <h2>Jonathan Chen</h2>
            <h3>Software Developer</h3>

            <div className="introLogo p-3">
                <a className="m-2" href="https://github.com/jchen2190/" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="github logo" /></a>
                <a className="m-2" href="https://www.linkedin.com/in/jonchen21" target="_blank" rel="noopener noreferrer"><img src={linkedInLogo} alt="linkedin logo" /></a>
            </div>

            <div className="down-arrow">
                <hr /><a href="#about"><img src={downArrowIcon} alt="down arrow icon" /></a><hr />
            </div>
        </section>
    );
}

export default Introduction;
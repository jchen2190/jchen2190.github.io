import React from 'react';
import htmlLogo from '../image/logo/html.svg';
import cssLogo from '../image/logo/css.svg';
import jsLogo from '../image/logo/javascript.svg';
import bootstrapLogo from '../image/logo/bootstrap-5.svg';
import greensockLogo from '../image/logo/gsap-greensock.svg';
import reactLogo from '../image/logo/react.svg';
import nodeJSLogo from '../image/logo/nodejs.svg';
import mongoDBLogo from '../image/logo/mongodb.svg';
// import pythonLogo from '../image/logo/python.svg';
import gitbashLogo from '../image/logo/git-bash.svg';
import githubLogo from '../image/logo/github.svg';
import vsLogo from '../image/logo/visual-studio-code.svg';
import postmanLogo from '../image/logo/postman.svg';

function Skills() {
    return (  
        <section className="skills">
            <h2>My Skills</h2>
            <h3 className="justify-content-md-center">Front End</h3>
            <div className="container text-center">
                <div className="row justify-content-left justify-content-md-center">
                    <div className="col">
                        <img src={htmlLogo} alt="html logo"/>
                        <label>HTML</label>
                    </div>
                    <div className="col">
                        <img src={cssLogo} alt="css logo"/>
                        <label>CSS</label>
                    </div>
                    <div className="col">
                        <img src={jsLogo} alt="js logo"/>
                        <label>JavaScript</label>
                    </div>
                    <div className="col">
                        <img src={bootstrapLogo} alt="bootstrap logo"/>
                        <label>Bootstrap</label>
                    </div>
                    <div className="col">
                        <img src={greensockLogo} alt="gsap logo"/>
                        <label>GreenSock</label>
                    </div>
                    <div className="col">
                        <img src={reactLogo} alt="react logo"/>
                        <label>React</label>
                    </div>
                </div>
            </div>

            <h3 className="justify-content-md-center">Back End</h3>
            <div className="container text-center">
                <div className="row justify-content-left justify-content-md-center">
                    <div className="col">
                        <img src={jsLogo} alt="js logo"/>
                        <label>JavaScript</label>
                    </div>
                    <div className="col">
                        <img src={nodeJSLogo} alt="nodejs logo"/>
                        <label>NodeJS</label>
                    </div>
                    <div className="col">
                        <img src={mongoDBLogo} alt="mongodb logo"/>
                        <label>MongoDB</label>
                    </div>
                    {/* <div className="col">
                        <img src={pythonLogo} alt="python logo"/>
                        <label>Python</label>
                    </div> */}
                </div>
            </div>
        
            <h3 className="justify-content-md-center">Tools</h3>
            <div className="container text-center">
                <div className="row justify-content-left-sm justify-content-md-center">
                    <div className="col">
                        <img src={gitbashLogo} alt="gitbash logo"/>
                        <label>Git Bash</label>
                    </div>
                    <div className="col">
                        <img src={githubLogo} alt="github logo"/>
                        <label>GitHub</label>
                    </div>
                    <div className="col">
                        <img src={vsLogo} alt="vscode logo"/>
                        <label>VSCode</label>
                    </div>
                    <div className="col">
                        <img src={postmanLogo} alt="postman logo"/>
                        <label>Postman</label>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
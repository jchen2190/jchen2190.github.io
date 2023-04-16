import React from 'react';
import './style.css';

function Skills() {
    return (  
        <section class="skills">
            <h2>My Skills</h2>
            <h3 class="justify-content-md-center">Front End</h3>
            <div class="container text-center">
                <div class="row justify-content-left justify-content-md-center">
                    <div class="col">
                        <img src="image/logo/html.svg" alt="html logo"/>
                        <label>HTML</label>
                    </div>
                    <div class="col">
                        <img src="image/logo/css.svg" alt="css logo"/>
                        <label>CSS</label>
                    </div>
                    <div class="col">
                        <img src="image/logo/javascript.svg" alt="js logo"/>
                        <label>JavaScript</label>
                    </div>
                    <div class="col">
                        <img src="image/logo/bootstrap-5.svg" alt="bootstrap logo"/>
                        <label>Bootstrap</label>
                    </div>
                    <div class="col">
                        <img src="image/logo/gsap-greensock.svg" alt="gsap logo"/>
                        <label>GreenSock</label>
                    </div>
                    <div class="col">
                        <img src="image/logo/react.svg" alt="react logo"/>
                        <label>React</label>
                    </div>
                </div>
            </div>

            <h3 class="justify-content-md-center">Back End</h3>
            <div class="container text-center">
                <div class="row justify-content-left justify-content-md-center">
                    <div class="col">
                        <img src="image/logo/javascript.svg" alt="js logo"/>
                        <label>JavaScript</label>
                    </div>
                    <div class="col">
                        <img src="image/logo/nodejs.svg" alt="nodejs logo"/>
                        <label>NodeJS</label>
                    </div>
                    <div class="col">
                        <img src="image/logo/mongodb.svg" alt="mongodb logo"/>
                        <label>MongoDB</label>
                    </div>
                    {/* <div class="col">
                        <img src="image/logo/python.svg" alt="python logo"/>
                        <label>Python</label>
                    </div> */}
                </div>
            </div>
        
            <h3 class="justify-content-md-center">Tools</h3>
            <div class="container text-center">
                <div class="row justify-content-left-sm justify-content-md-center">
                    <div class="col">
                        <img src="image/logo/git-bash.svg" alt="gitbash logo"/>
                        <label>Git Bash</label>
                    </div>
                    <div class="col">
                        <img src="image/logo/github.svg" alt="github logo"/>
                        <label>GitHub</label>
                    </div>
                    <div class="col">
                        <img src="image/logo/visual-studio-code.svg" alt="vscode logo"/>
                        <label>VSCode</label>
                    </div>
                    <div class="col">
                        <img src="image/logo/postman.svg" alt="postman logo"/>
                        <label>Postman</label>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
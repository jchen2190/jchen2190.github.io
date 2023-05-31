import React from 'react';

import htmlLogo from '../image/logo/html.svg';
import cssLogo from '../image/logo/css.svg';
import jsLogo from '../image/logo/javascript.svg';
import bootstrapLogo from '../image/logo/bootstrap-5.svg';
import greensockLogo from '../image/logo/gsap-greensock.svg';
import reactLogo from '../image/logo/react.svg';
import jqueryLogo from "../image/logo/jquery.svg"

import nodeJSLogo from '../image/logo/nodejs.svg';
import npmLogo from '../image/logo/npm.svg';
import mongoDBLogo from '../image/logo/mongodb.svg';
import renderLogo from '../image/logo/render.png';
import pythonLogo from '../image/logo/python.svg';
import pandasLogo from '../image/logo/pandas.svg';
import djangoLogo from '../image/logo/django.svg';

import gitbashLogo from '../image/logo/git-bash.svg';
import githubLogo from '../image/logo/github.svg';
import vsLogo from '../image/logo/visual-studio-code.svg';
import postmanLogo from '../image/logo/postman.svg';
import jupyterLogo from '../image/logo/jupyter.svg';

function Skills() {
    const Frontend = [
        { id: "html", name: "HTML", image: htmlLogo },
        { id: "css", name: "CSS", image: cssLogo },
        { id: "javascript", name: "Javascript", image: jsLogo },
        { id: "bootstrap", name: "Bootstrap", image: bootstrapLogo },
        { id: "greensock", name: "GreenSock", image: greensockLogo },
        { id: "react", name: "React", image: reactLogo },
        { id: "jquery", name: "JQuery", image: jqueryLogo},
    ]
    const Backend = [
        { id: "javascript", name: "Javascript", image: jsLogo },
        { id: "nodejs", name: "Node.JS", image: nodeJSLogo },
        { id: "npm", name: "npm", image: npmLogo },
        { id: "mongodb", name: "MongoDB", image: mongoDBLogo },
        { id: "render", name: "Render", image: renderLogo },
        { id: "python", name: "Python", image: pythonLogo },
        { id: "pandas", name: "pandas", image: pandasLogo },
        { id: "django", name: "Django", image: djangoLogo },
    ]
    const Tools = [
        { id: "gitbash", name: "Git Bash", image: gitbashLogo },
        { id: "github", name: "GitHub", image: githubLogo },
        { id: "vscode", name: "VSCode", image: vsLogo },
        { id: "postman", name: "Postman", image: postmanLogo },
        { id: "jupyter", name: "Jupyter", image: jupyterLogo },
    ]

    return (  
        <section className="skills">
            <h2 className="title d-flex">My Skills</h2>
            <h3 className="justify-content-md-center">Front End</h3>
            <div className="container text-center">
                <div className="row justify-content-left justify-content-md-center">
                    {Frontend.map((frontend) => {
                        return (
                            <div className="col" key={frontend.id}>
                                <img src={frontend.image} alt={frontend.id + " logo"}/>
                                <label>{frontend.name}</label>
                            </div>
                        )
                    })}
                </div>
            </div>

            <h3 className="justify-content-md-center">Back End</h3>
            <div className="container text-center">
                <div className="row justify-content-left justify-content-md-center">
                    {Backend.map((backend) => {
                        return (
                            <div className="col" key={backend.id}>
                                <img src={backend.image} alt={backend.name + " logo"}/>
                                <label>{backend.name}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
        
            <h3 className="justify-content-md-center">Tools</h3>
            <div className="container text-center">
                <div className="row justify-content-left-sm justify-content-md-center">
                    {Tools.map((tool) => {
                        return (
                            <div className="col" key={tool.id}>
                                <img src={tool.image} alt={tool.name + " logo"}/>
                                <label>{tool.name}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;
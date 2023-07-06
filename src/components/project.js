import React from 'react';
import deployIcon from '../image/icons/deploy.svg'
import githubLogo from '../image/logo/github.svg';
import project1 from '../image/projects/issuetracker2.png'
import project2 from '../image/projects/spacemission2.png'
import project3 from '../image/projects/weatherAPI2.png'

function Projects() {
    return (
        <section id="projects">
            <h2 className="title">Featured Projects</h2>
            <div className="container">
                <div className="row mb-5">
                    <div className="projectImg col-lg">
                        <a href="https://issue-tracker-client-dja8.onrender.com/" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={project1} alt="project1 screenshot" /></a>
                    </div>
                    <div className="projectText col-lg mb-5">
                        <h4 className="mt-2">IssueTracker</h4>
                        <p>MERN (MongoDB, Express, React, NodeJS) application with CRUD (Create, Read, Update, Delete) functionality project that lists issues for users to create, edit and share issues. </p>
                        <p>JavaScript, React, MongoDB, Node.JS, Express, Bootstrap</p>
                        <div>
                            <a className="m-2" href="https://issue-tracker-client-dja8.onrender.com/" target="_blank" rel="noopener noreferrer"><img src={deployIcon} width="20" alt="deploy icon"/> Deployment (Takes a while to load) </a>
                            <a className="ml-2" href="https://github.com/jchen2190/issue-tracker-client" target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="20" alt="github logo" /> Github</a>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="projectImg col-lg">
                        <a href="https://github.com/jchen2190" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={project2} alt="project2 screenshot" /></a>
                    </div>
                    <div className="projectText col-lg mb-5">
                        <h4 className="mt-2">spaceMission</h4>
                        <p>Website application made with React using NASA produced photos. User can interact with the links to see other information</p>
                        <p>JavaScript, React, Node.JS, Axios, Bootstrap</p>
                        <div>
                            <a className="m-2" href="https://jchen2190.github.io/spaceMission/" target="_blank" rel="noopener noreferrer"><img src={deployIcon} width="20" alt="deploy icon"/> Deployment</a>
                            <a className="ml-2" href="https://github.com/jchen2190/" target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="20" alt="github logo" /> Github</a>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="projectImg col-lg">
                        <a href="https://weatherapp-2dyu.onrender.com" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={project3} alt="project3 screenshot" /></a>
                    </div>
                    <div className="projectText col-lg mb-5">
                        <h4 className="mt-2">WeatherApp</h4>
                        <p>Built a weather app that takes in a name of a city and returns the weather forecast and variables of the city location. Uses Open-Meteo Geocoding and Weather Forecast API.</p>
                        <p>JavaScript, EJS, Node.JS</p>
                        <div>
                            <a className="m-2" href="https://weatherapp-2dyu.onrender.com" target="_blank" rel="noopener noreferrer"><img src={deployIcon} width="20" alt="deploy icon"/> Deployment (Takes a while to load)</a>
                            <a className="ml-2" href="https://github.com/jchen2190/weatherAPI" target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="20" alt="github logo" /> Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
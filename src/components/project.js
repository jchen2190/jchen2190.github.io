import React from 'react';
import githubLogo from '../image/logo/github.svg';
import project3 from '../image/projects/weatherAPI2.png'

function Projects() {
    return (
        <section id="projects">
            <h2 className="title">Projects</h2>
            <div className="container">
                <div className="row m-3">
                    <a href="https://github.com/jchen2190" target="_blank" rel="noopener noreferrer"><img src={project3} alt="project1 screenshot" /></a>
                    <div className="col-xs-1 col-sm m-3">
                        <h4>Project 1</h4>
                        <p>This is the first project information</p>
                        <a href="https://github.com/jchen2190/" target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="20" alt="github logo" /> Github</a>
                    </div>
                </div>
                <div className="row m-3">
                    <a href="https://github.com/jchen2190" target="_blank" rel="noopener noreferrer"><img src={project3} alt="project2 screenshot" /></a>
                    <div className="col-xs-1 col-sm m-3">
                        <h4>Project 2</h4>
                        <p>This is the second project information</p>
                        <a href="https://github.com/jchen2190/" target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="20" alt="github logo" /> Github</a>
                    </div>
                </div>
                <div className="row m-3">
                    <a href="https://weatherapp-2dyu.onrender.com" target="_blank" rel="noopener noreferrer"><img src={project3} alt="project3 screenshot" /></a>
                    <div className="col-xs-1 col-sm m-3">
                        <h4>WeatherApp</h4>
                        <p>Built a weather app that takes in a name of a city and returns the weather forecast and variables of the city location. Uses Open-Meteo Geocoding and Weather Forecast API.</p>
                        <p>Javascript, EJS, Node.JS</p>
                        <a href="https://github.com/jchen2190/weatherAPI" target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="20" alt="github logo" /> Github</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
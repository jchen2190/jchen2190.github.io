import React from 'react';
import githubLogo from '../image/logo/github.svg';
import project3 from '../image/projects/weatherAPI2.png'

function Projects() {
    return (
        <section id="projects">
            <h2 class="title">Projects</h2>
            <div class="container">
                <div class="row m-3">
                    <img src={project3} alt="project1 screenshot" />
                    <div class="col-xs-1 col-sm">
                        <h4>Project 1</h4>
                        <p>This is the first project information</p>
                    </div>
                </div>
                <div class="row m-3">
                    <img src={project3} alt="project2 screenshot" />
                    <div class="col-xs-1 col-sm">
                        <h4>Project 2</h4>
                        <p>This is the second project information</p>
                    </div>
                </div>
                <div class="row m-3">
                    <img src={project3} alt="project3 screenshot" />
                    <div class="col-xs-1 col-sm">
                        <h4>WeatherApp</h4>
                        <p>Built a weather app that takes in a name of a city and returns the weather forecast of the location.</p>
                        <p>Javascript, EJS</p>
                        <a href="https://github.com/jchen2190/weatherAPI" target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="20" alt="github logo" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
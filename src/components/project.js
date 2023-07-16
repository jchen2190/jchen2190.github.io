import React from 'react';
import deployIcon from '../image/icons/deploy.svg'
import githubLogo from '../image/logo/github.svg';
import project1 from '../image/projects/issuetracker2.png'
import project2 from '../image/projects/spacemission2.png'
import project3 from '../image/projects/weatherAPI2.png'

function Projects() {
    const projects = [
        {
            id: "issuetracker",
            name: "IssueTracker",
            screenshot: project1,
            link: "https://issue-tracker-client-dja8.onrender.com/",
            github: "https://github.com/jchen2190/issue-tracker-client",
            description: "MERN (MongoDB, Express, React, NodeJS) application with CRUD (Create, Read, Update, Delete) functionality project that lists issues for users to create, edit and share issues.",
            technologies: "JavaScript, React, MongoDB, Node.JS, Express, Bootstrap"
        },
        {
            id: "spacemission",
            name: "SpaceMission",
            screenshot: project2,
            link: "https://jchen2190.github.io/spaceMission/",
            github: "https://github.com/jchen2190/spaceMission",
            description: "Website application made with React using NASA produced photos. User can interact with the links to see other information",
            technologies: "JavaScript, React, Node.JS, Axios, Bootstrap"
        },
        {
            id: "weatherapp",
            name: "WeatherApp",
            screenshot: project3,
            link: "https://weatherapp-2dyu.onrender.com",
            github: "https://github.com/jchen2190/weatherAPI",
            description: "Built a weather app that takes in a name of a city and returns the weather forecast and variables of the city location. Uses Open-Meteo Geocoding and Weather Forecast API.",
            technologies: "JavaScript, EJS, Node.JS"
        }
    ]

    return (
        <section id="projects">
            <h2 className="title">Featured Projects</h2>
            <div className="container">
                {
                    projects.map((project) => {
                        return (
                            <div className="row mb-5">
                                <div className="projectImg col-lg">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={project.screenshot} alt="project screenshot" /></a>
                                </div>
                                <div className="projectText col-lg mb-5">
                                    <h4 className="mt-2">{project.name}</h4>
                                    <p>{project.description}</p>
                                    <p>{project.technologies}</p>
                                    <div>
                                        <a className="m-2" href={project.link} target="_blank" rel="noopener noreferrer"><img src={deployIcon} width="20" alt="deploy icon"/> Deployment</a>
                                        <a className="ml-2" href={project.github} target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="20" alt="github logo" /> Github</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Projects;
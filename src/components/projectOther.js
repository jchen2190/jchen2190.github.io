import React from 'react';
import deployIcon from '../image/icons/deploy.svg'
import githubLogo from '../image/logo/github.svg';

function OtherProjects() {
    const projects = [
        {
            id: "blackjack",
            name: "Blackjack",
            link: "https://jchen2190.github.io/blackjack/",
            github: "https://github.com/jchen2190/blackjack",
            description: "Created a dynamic and interactive Blackjack game and implemented game mechanics such as card dealing and player actions (hit, stand, double-down), and dealer logic",
            technologies: "JavaScript"
        },
        {
            id: "chess",
            name: "Chess",
            link: "https://jchen2190.github.io/chess/",
            github: "https://github.com/jchen2190/chess",
            description: "Designed and implmented a fully functional Chess game using object-oriented programming principles. Developed game logic for piece movements, captures, and game state management.",
            technologies: "JavaScript"
        },
        {
            id: "weatherapp",
            name: "WeatherApp",
            link: "https://weatherapp-2dyu.onrender.com",
            github: "https://github.com/jchen2190/weatherAPI",
            description: "Built a weather app that takes in a name of a city and returns the weather forecast and variables of the city location. Uses Open-Meteo Geocoding and Weather Forecast API.",
            technologies: "JavaScript, EJS, Node.JS"
        },
        // {
        //     id: "beatwave",
        //     name: "beatWave",
        //     link: "https://jchen2190.github.io/beatWave/",
        //     github: "https://github.com/jchen2190/beatWave",
        //     description: "Built an application that takes a song and visualizes the waveforms of the audio as the song plays.",
        //     technologies: "JavaScript, p5.js"
        // }
    ]

    return (
        <section id="otherprojects">
            <h2 className="title">Other Projects</h2>
            <div className="container">
                <div className="row justify-content-evenly">
                    {
                        projects.map((project) => {
                            return (
                                <div className="card projectText mt-4 col-md-5 col-xl-3 mx-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h4 className="card-title"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></h4>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer"><img src={deployIcon} width="30" alt="deploy icon"/></a>
                                        </div>
                                        <p>{project.description}</p>
                                    </div>
                                    <div className="d-flex justify-content-between mx-3">
                                        <p>{project.technologies}</p>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="30" alt="github logo" /></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default OtherProjects;
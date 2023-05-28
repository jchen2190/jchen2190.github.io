import React from 'react';
import profilepic from '../image/profilepic.jpg'

function About() {
    return (  
        <section id="about">
            <h2 className="d-flex justify-content-center mb-3 p-3">About Me</h2>
            <div className="row">
                <div className="text-center mx-auto m-1 col-lg-5">
                    <img src={profilepic} alt="profile" className="img-fluid rounded" />
                </div>
                <p className="mx-auto m-1 col-lg-5 align-self-center">I am an experienced civil engineer with 10 years of experience in overseeing construction projects to ensure compliance with building codes, plans, and specifications. Proficient in identifying and resolving issues, leading teams, and delivering projects on time and within budget. Seeking a software engineering role to leverage my technical knowledge and problem-solving skills.</p>
            </div>
        </section>
    );
}

export default About;
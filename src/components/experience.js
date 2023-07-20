import React from 'react';
import laptopIcon from '../image/icons/laptop2.svg'
import briefcaseIcon from '../image/icons/work-case-filled.svg'
import gradCapIcon from '../image/icons/education-cap.svg'
import hourglassIcon from '../image/icons/hourglass.svg'

function Experience() {
    const experiences = [
        {
            id: "nobledesktop",
            name: "Noble Desktop",
            title: "Software Developer",
            description: [
                "Completed a comprehensive software engineering bootcamp that covered topics such as programming languages (Javascript & Python), data structures and algorithms, web development, and database systems.",
                "Participated in group projects that emphasized teamwork and problem-solving skills.",
                "Gained hands-on experience in developing software applications using modern development methodologies and tools.",
                "Improved technical skills and knowledge through coursework, projects, and collaboration with peers and instructors.",
            ],
            icon: laptopIcon,
            iconAlt: "nobledesktop icon",
            timeline: "Jan 2023 - Present",
            color: "cd-timeline-img cd-noble",
        },
        {
            id: "garg",
            name: "Garg Consulting Services, Inc.",
            title: "Engineer",
            description: [
                "Conducted site inspections to monitor compliance with building codes and project specifications, resulting in a high rate of on-time project completion.",
                "Reviewed and approved shop drawings, submittals, and change orders to ensure they met project requirements and standards.",
                "Conducted quality control tests on materials and equipment to verify their compliance with project specifications and ensured proper installation.",
                "Trained and supervised junior inspectors to improve their skills and efficiency, resulting in a more streamlined inspection process.",
                "Collaborated with contractors, architects, engineers, and project managers to resolve design and construction issues and improve processes.",
                "Maintained accurate and up-to-date records of all inspections, test results, and corrective actions, ensuring full documentation of projects.",
            ],
            icon: briefcaseIcon,
            iconAlt: "garg icon",
            timeline: "Feb 2013 - Jan 2023",
            color: "cd-timeline-img cd-work",
        },
        {
            id: "umass",
            name: "University of Massachusetts",
            title: "Civil Engineer Major",
            description: [
                "Completed a 4-year program in Civil Engineering with a focus on designing and constructing buildings, infrastructure, and transportation systems.",
                "Acquired in-depth knowledge of engineering principles, mathematics, materials science, and computer-aided design.",
                "Completed various projects and design reports, gaining practical experience in designing and analyzing structures, such as bridges, buildings, and transportation systems.",
                "Participated in team-based projects, collaborating with peers and instructors, to develop solutions to real-world engineering problems.",
            ],
            icon: gradCapIcon,
            iconAlt: "umass icon",
            timeline: "Graduated 2013",
            color: "cd-timeline-img cd-uni",
        },
    ]

    return (  
        <section id="experience">
            <h2 className="title">Experience</h2>

            <section id="cd-timeline" className="cd-container">
                {
                    experiences.map(experience => {
                        return (
                            <div className="cd-timeline-block">
                                <div className={experience.color}>
                                    <img src={experience.icon} alt={experience.iconAlt}/>
                                </div>
                    
                                <div className="cd-timeline-content">
                                    <h2>{experience.name}</h2>
                                    <h3>{experience.title}</h3>
                                    <ul>
                                        {experience.description.map(event => {
                                            return (
                                                <li>{event}</li>
                                            )
                                        })}
                                    </ul>
                                    {/* <a href="#0" className="cd-read-more">See more</a> */}
                                    <span className="cd-date">{experience.timeline}</span>
                                </div>
                            </div>
                        )
                    })
                }
        
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-hourglass">
                        <img src={hourglassIcon} alt="hourglass" />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Experience;
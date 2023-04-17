import React from 'react';
import laptopIcon from '../image/icons/laptop2.svg'
import briefcaseIcon from '../image/icons/work-case-filled.svg'
import gradCapIcon from '../image/icons/education-cap.svg'
import hourglassIcon from '../image/icons/hourglass.svg'

function Experience() {
    return (  
        <section id="experience">
            <h2 className="title">Experience</h2>

            <section id="cd-timeline" className="cd-container">
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-noble">
                        <img src={laptopIcon} alt="laptop"/>
                    </div>
        
                    <div className="cd-timeline-content">
                        <h2>Noble Desktop</h2>
                        <h3>Software Developer</h3>
                        <ul>
                            {/* <li>Completed a comprehensive software engineering bootcamp that covered topics such as programming languages (Javascript & Python), data structures and algorithms, web development, and database systems.</li> */}
                            <li>Participated in group projects that emphasized teamwork and problem-solving skills.</li>
                            <li>Gained hands-on experience in developing software applications using modern development methodologies and tools.</li>
                            <li>Improved technical skills and knowledge through coursework, projects, and collaboration with peers and instructors.</li>
                        </ul>
                        
                        {/* <a href="#0" className="cd-read-more">See more</a> */}
                        <span className="cd-date">Jan 2023 - Present</span>
                    </div>
                </div>
        
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-work">
                        <img src={briefcaseIcon} alt="briefcase" />
                    </div>
        
                    <div className="cd-timeline-content">
                        <h2>Garg Consulting Services</h2>
                        <h3>Engineer</h3>
                        <ul>
                            <li>Conducted site inspections to monitor compliance with building codes and project specifications, resulting in a high rate of on-time project completion.</li>
                            <li>Reviewed and approved shop drawings, submittals, and change orders to ensure they met project requirements and standards.</li>
                            <li>Conducted quality control tests on materials and equipment to verify their compliance with project specifications and ensured proper installation.</li>
                            <li>Trained and supervised junior inspectors to improve their skills and efficiency, resulting in a more streamlined inspection process.</li>
                            <li>Collaborated with contractors, architects, engineers, and project managers to resolve design and construction issues and improve processes.</li>
                            <li>Maintained accurate and up-to-date records of all inspections, test results, and corrective actions, ensuring full documentation of projects.</li>
                        </ul>
                        {/* <a href="garg.html" className="cd-read-more">Read more</a> */}
                        <span className="cd-date">Feb 2013 - Jan 2023, 10 years</span>
                    </div>
                </div>
        
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-uni">
                        <img src={gradCapIcon} alt="graduation cap" />
                    </div>
        
                    <div className="cd-timeline-content">
                        <h2>University of Massachusetts</h2>
                        <h3>Civil Engineer Major</h3>
                        <ul>
                            <li>Completed a 4-year program in Civil Engineering with a focus on designing and constructing buildings, infrastructure, and transportation systems.</li>
                            <li>Acquired in-depth knowledge of engineering principles, mathematics, materials science, and computer-aided design.</li>
                            <li>Completed various projects and design reports, gaining practical experience in designing and analyzing structures, such as bridges, buildings, and transportation systems.</li>
                            <li>Participated in team-based projects, collaborating with peers and instructors, to develop solutions to real-world engineering problems.</li>
                        </ul>
                        {/* <a href="#" className="cd-read-more">Read more</a> */}
                        <span className="cd-date">Graduated 2013</span>
                    </div>
                </div>
        
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-hourglass">
                        <img src={hourglassIcon} alt="hourglass" />
                    </div>
                    <div className="cd-timeline-content" style={{visibility: 'hidden'}}></div>
                </div>
            </section>
        </section>
    );
}

export default Experience;
import React from "react";
import ResumeCard from "../../shared/resumeCard/ResumeCard";
import { Link } from 'react-router-dom'
import Button from "../../shared/button/Button";
import './Resume.css'
import pdf from '../../static/EKWUNIFE-FIDELIS.pdf'

const Resume = () => {
    const experiences = [
        {
            company: "Contracts and Freelancing",
            position: "Software developer",
            started: "september 2021",
            ended: null,
            description:
                "I am currently working on building decentralized web3 application",
            achievements: [
                "Built MERN applications for clients",
                "Worked with team of developers to build web application for fintech startup",
                "Managing and maintaining of the a company's code",
                "Code testing and Debugging",
                "Managed app state with react hooks and context",
                "Created innovative design with the use of programming language"
            ],
        },
        {
            company: "SmartWay Technology",
            position: "Backend Developer [Intern]",
            started: "april 2021",
            ended: "August 2021",
            description:
                "I contributed in developing projects for six months while learning new skills",
            achievements: [
                "Evaluated new software products and technologies and recommended changes to enhance existing products and also in building new ones",
                "Worked with my team members to build scable APIs",
                "Managing and maintaining of the company's code",
                "Worked with my teammates to implement app features with MERN",
                "Built complex layouts and components with React & SASS"
            ],
        },
    ]

    const skills = [
        {
            title: 'Languages',
            body: ['JavaScript', 'TypeScript']
        },
        {
            title: 'Frameworks',
            body: ['Nodejs', 'React', 'Express', 'GraphQL']
        },
        {
            title: 'Database/Storage',
            body: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Cloud Storage']
        },
        {
            title: 'ORM',
            body: ['Mongoose', 'Sequelize', 'Prisma']
        },
        {
            title: 'Tools',
            body: ['Git', 'Docker', 'postman']
        }
    ]

    return (
        <div className="resume">
            <div className="resume_container">
                <div className="top_row">
                    <h1>Fidelis Ekwunife</h1>
                    <div className="buttons">
                        <a
                            href="https://www.linkedin.com/in/fidelis-chiadikaobi-89592b20b/"
                        >
                            <small>
                                <i className="fab fa-linkedin"></i> <span>Linked In</span>
                            </small>
                        </a>
                        <a
                            href={pdf}
                        >
                            <small>
                                <i className="fas fa-download"></i> <span>Download </span>
                            </small>
                        </a>
                    </div>
                </div>
                <p>Software Developer</p>
                <div className="summary">
                    <p>
                        I build open-source libraries and I create scalable applications with good
                        users interaction and experience
                    </p>
                </div>
                <div className="divider">
                    <p>stacks</p>
                    <span></span>
                </div>
                <div className="skills">
                    {
                        skills.map((skill, index) => (
                            <p key={index} id={index}>
                                <span className="highlight" >{skill.title} </span>
                                <span>:{" "}{skill.body.map((value) => `${value}. `)}</span>
                            </p>
                        ))
                    }
                </div>
                <div className="divider">
                    <p>Experience</p>
                    <span></span>
                </div>
                <div>
                    {
                        experiences.map((experience, index) => (
                            <ResumeCard {...experience} key={index} id={index} />))
                    }
                </div>
                <div className="divider">
                    <p>Proficiency in:</p>
                    <span></span>
                </div>
                <div className="skills">
                <span><p>■{" "}English</p></span>
                </div>
                <div className="divider">
                    <p>Projects</p>
                    <span></span>
                </div>
                <div className="exp_container">
                    <section className="experience">
                        <article className="description">
                            <p className="nospan">
                                Links to my works can be found on {" "}
                                <Link to="/project">Projects</Link>
                            </p>
                        </article>
                    </section>
                </div>
            </div>
            <Button
                previous={{ url: '/article', text: 'Article' }}
                next={{ url: '/', text: 'Home' }}
            />
        </div>
    )
}

export default Resume
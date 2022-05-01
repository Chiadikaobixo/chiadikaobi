import React from "react";
import ResumeCard from "../../shared/resumeCard/ResumeCard";
import { Link } from 'react-router-dom'
import Button from "../../shared/button/Button";
import './Resume.css'

const Resume = () => {
    const experiences = [
        {
            company: "Franchise",
            position: "Software Engineer",
            started: "september 2021",
            ended: null,
            description:
                "I am currently building scalabel API with the team at franchise",
            achievements: [
                "built an ecommerce store for Franchise Clothing",
                "Managing and maintaining of the company's code"
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
                "Worked with my team members to build Node API",
                "Managed app state with react hooks",
                "Worked with my teammates to implement app features with MERN",
                "Built complex layouts and components with React & SASS"
            ],
        },
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
                            href=""
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
                        I bring ideas to Software, i create scalable application with good
                        users interaction and experience
                    </p>
                </div>
                <div className="divider">
                    <p>stacks</p>
                    <span></span>
                </div>
                <div className="skills">
                    <p>
                        Javascript [ES6+], MongoDB, Express, React JS, Node js
                        Typescript, Conext, Redux, Firebase, HTML/CSS/SASS
                    </p>
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
                    <p>Projects</p>
                    <span></span>
                </div>
                <div className="exp_container">
                    <section className="experience">
                        <article className="description">
                            <p className="nospan">
                                Links to my works can be found on {" "}
                                <Link to="/project">localhost:3000/project</Link>
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
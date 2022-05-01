import React from "react";
import ProjectCard from "../../shared/projectCard/ProjectCard";
import Button from '../../shared/button/Button'
import './Project.css'

const Project = () => {
    const featuredProjects = [
        {
            title: "Task Manager API",
            description:
            "Rest Api for managing (CRUD) your task and also sends an email when a user sign up or logout.",
            github: "https://github.com/Chiadikaobixo/node-task-manager-api",
            live: "",
            stack: "MongoDB + Express + Node JS",
            isOnlyCode: true
        },
        {
            title: "E-commerce Api",
            description:
            "Rest Api that performs the basic CRUD operation of an ecommerce store with admin access",
            github: "https://github.com/Chiadikaobixo/Node-Ecommerce-API",
            live: "",
            stack: "MongoDB + Express + Node JS",
            isOnlyCode: true
        }
    ]
    const projects = [
        {
            title: "Weather Application",
            description:
            "This Weather app generates the current weather forecast in your location at the current point in time",
            github: "https://github.com/Chiadikaobixo/node-weather-app",
            live: "https://chiadi-weather-application.herokuapp.com/",
            stack: "Express + HBS+ Node JS",
            isPrivate: false
        },
        {
            title: "Expensify Application",
            description: "A React application that keeps tract of your expenses",
            github: "https://github.com/Chiadikaobixo/react-expensify-app",
            live: "https://react-expensify-app1.herokuapp.com/",
            stack: "React + Firebase + Express",
            isPrivate: false
        },
        {
            title: "SocialMedia API",
            description: "A social media rest API that performs the basic CRUD operation",
            github: "https://github.com/Chiadikaobixo/socialMedia-api",
            live: "",
            stack: "MongoDB + Express + Node JS",
            isOnlyCode: true
        }
    ]

    return (
        <div className="project">
            <div className="portfolio_showcase portfolio_showcase_full">
                <h3 className="title">FEATURED</h3>
                {
                    featuredProjects.map((project, index) => (
                        <ProjectCard {...project} key={index} id={index} />
                    ))
                }
            </div>
            <div className="portfolio_showcase">
                <h3 className="title">OTHERS</h3>
                {
                    projects.map((project, index) => (
                        <ProjectCard {...project} key={index} id={index} />
                    ))
                }
            </div>
            <div>
                <Button
                    previous={{ url: '/', text: 'Home' }}
                    next={{ url: '/article', text: 'Article' }}
                />
            </div>
        </div>
    )
}

export default Project
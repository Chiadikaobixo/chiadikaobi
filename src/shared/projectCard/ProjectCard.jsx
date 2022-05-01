import React from "react";
import './ProjectCard.css'

const ProjectCard = ({
    id,
    title,
    description,
    github,
    live,
    stack,
    isOnlyCode,
    isPrivate,
    fullWidth,
    isPackage,
}) => (
    <div className={`box_container ${id % 2 !== 0 && !fullWidth ? "box_container_pad" : ""
        } ${fullWidth && "box_container_full"}`}>
        <div className="box">
            <div className="project_details">
                <h3>{title}</h3>
                <small>{stack}</small>
                <p>{description}</p>
            </div>
            <div className="project_links">
                {isOnlyCode? (
                    <small className="hover-effect">
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-code-branch"></i>{" "} Code{" "}
                        </a>
                    </small>
                ) :(


                <small className="hover-effect">
                    <a href={live} target="_blank" rel="noopener noreferrer">
                        {
                            isPackage ? (
                                <div>
                                    <i className="fas fa-cube"></i>{" "} Pkg Repo
                                </div>
                            ) : (
                                <div>
                                    <i className="fas fa-eye"></i>{" "} live
                                </div>
                            )
                        }
                        {isPrivate ? (
                            ""
                        ) : (
                            <small className="hover-effect">
                                <a href={github} target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-code-branch"></i>{" "} Code{" "}
                                </a>
                            </small>
                        )}
                    </a>
                </small>
                
                )}
            </div>
        </div>
    </div>
)

export default ProjectCard
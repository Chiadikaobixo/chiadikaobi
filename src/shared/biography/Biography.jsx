import React from "react";
import { Link } from 'react-router-dom'
import './Biography-mobile.css'
import './Biography.css'

const Biography = ({ active }) => {
  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>Hello, I'm Chiadikaobi</h1>
          <div className="avi">
            <img src="https://www.linkpicture.com/q/avatar_4.jpg" alt="avatar" />
          </div>
        </div>
        <div className="intro_box">
          <h3>Software Developer</h3>
        </div>
        <div className="description">
          <p>
            <span>
              I build open-source <span className="highlight">backend-end</span> libraries and <span className="highlight">scalable APIs</span>
            </span>
          </p>
        </div>
        <div className="go_button_container">
          <Link to="/project" className="explore">
            <button className="explore">
              Explore
            </button>
          </Link>
        </div>
      </div>
      <nav>
        <ul>
          <li className={active === "project" ? "active_menu" : ""}>
            <small>
              <span>00</span>
              <Link to="/">
                <span className="menu_bullet"></span> PROJECTS
              </Link>
            </small>
          </li>

          <li className={active === "resume" ? "active_menu" : ""}>
            <small>
              <span>01</span>
              <Link to="/resume">
                <span className="menu_bullet"></span> RESUME
              </Link>
            </small>
          </li>

          <li className={active === "article" ? "active_menu" : ""}>
            <small>
              <span>02</span>
              <Link to="/article">
                <span className="menu_bullet"></span> ARTICLES
              </Link>
            </small>
          </li>
        </ul>
      </nav>
      <div className="footer">
        <img src="https://www.linkpicture.com/q/avatar_4.jpg" alt="" />
        <div className="social">
          <a
            href="https://github.com/chiadikaobixo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>Github 
          </a>

          <a
            href="https://twitter.com/chiadikaobixo"
            target="_blank"
            rel="noopener noreferrer"
          >
          <i className="fab fa-twitter"></i>Twitter{" "}
          </a>
          
          <a
            href="https://www.linkedin.com/in/chiadikaobixo/">
            <i className="fab fa-linkedin"></i>Linkedin {" "}
            <span>{"  "}</span>
          </a>

          <a
            href="mailto:chiadikaobixo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-at"></i> Email{" "}
          </a>
        </div>
      </div>
    </div>
  )
}
export default Biography
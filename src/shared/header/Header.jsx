import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [closed, setClosed] = useState(true)

    return (
        <div id="header" >
            <div className="header_wrapper">
                <div className="logo_container">
                <Link to="/" style={{textDecoration: "none", fontSize: 30, fontWeight: "bold", color: "white"}}>
                Chiadikaobi.
            </Link>
                </div>
                <div className="menu_btn_wrapper">
                    <button
                        className={closed ? "menu_btn" : "menu_btn menu_btn_open"}
                        onClick={() => setClosed(!closed)}
                    >
                        <div className="menu_btn_line"></div>
                        <div className="menu_btn_line"></div>
                    </button>
                </div>
            </div>
            {
                !closed ? (
                    <nav>
                        <div className="mobile_menu_container">
                            <ul>
                                <li>
                                    <Link to="/" onClick={() => setClosed(true)}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/project" onClick={() => setClosed(true)}>
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/article" onClick={() => setClosed(true)}>
                                        Articles
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/resume" onClick={() => setClosed(true)}>
                                        Resume
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" onClick={() => setClosed(true)}>
                                        Contact Me
                                    </Link>
                                </li>
                            </ul>
                            <div className="social_box">
                                <h3>You Can Find Me On</h3>
                                <div className="social_icons">
                                    <a href="https://github.com/chiadikaobixo">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://twitter.com/chiadikaobixo">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/chiadikaobixo/">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="mailto:Chiadikaobixo@gmail.com">
                                        <i className="fas fa-at"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>

                ) : ('')
            }
        </div>
    )
}

export default Header
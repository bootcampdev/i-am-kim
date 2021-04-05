import React from "react";
import Navbar from "./Navbar.js"
import "../css/layout.css";


function Header() {
    return (
        //   
        <header className="App-background">
            <Navbar />

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">Meet Kimberley Heuer</h1>
                    <h3 style={{ color: '#f6f5ed', fontFamily: 'sans-serif ' }}>I am a DevOps developer who loves technology and applied science.  I am a avid cyclist who loves to cook and always striving to make my garden produce. I dig to get my hands dirty and code!
                    </h3>

                    <ul className="social">
                        <li key="linkedin">
                            <a href="https://www.linkedin.com/in/kimberley-heuer">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </li>
                        <li key="github">
                            <a href="https://github.com/bootcampdev">
                                <i className="fa fa-github"></i>
                            </a>
                        </li>
                        <li key="email">
                            <a href="mailto:kheuer9@gmail.com">
                                <i className="fa fa-envelope"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
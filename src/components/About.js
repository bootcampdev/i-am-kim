import React from 'react'
import Navbar from "./Navbar.js"
import MePic from "../images/mePic.jpg"

function About() {
    return (


        <section id="about">
            <Navbar />
            <div className="row profile-section">

                <div className="row">

                    <div className="two column">
                        <img className="profile-pic" src={MePic} alt="" />
                    </div>
                    <div className="ten column">
                        <h2>About Me</h2>
                        <p>I'm currently working with Northwestern University supporting the Office for Research and compliance systems. I enjoy science and technology and will go to great lengths to learn new technologies and how to best apply them to my applications. I've worked with pharmaceutical companies supporting both chemistry and biology teams. It is important and it is my goal is to understand their discipline and apply the technology that best accomplish these goals and objectives for their applications. </p>
                    </div>
                </div>

                <div className="row">
                    <div className="tweleve column">
                        <h2>Contact Details</h2>
                    </div>
                </div>

            </div>

        </section>

        // <header className="App-background">
        // <div>
        //     <Navbar />
        // </div>
        // </header>
    )

}

export default About

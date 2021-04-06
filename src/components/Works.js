import React from 'react'
import Navbar from "./Navbar.js"
import WorkCard from "./WorkCard.js"
import Footer from "./Footer.js"
import Wrapper from "./Wrapper.js"
import portfolio from "../portfolio.json";
import image1 from "../images/moody.jpg"


const Works = () => {

    //console.log("heere", JSON.parse(portfolio))

    return (

        <section id="works">
            <Navbar />

            <div className="wrapper">

                {portfolio.map(work => (
                    //console.log(work.features)
                    <WorkCard
                        id={work.id}
                        key={work.id}
                        name={work.name}
                        image={work.image}
                        description={work.description}
                        githubsite={work.githubsite}
                        deploymentsite={work.deploymentsite}
                        features={work.features}
                    />
                ))}
            </div>
            <Footer />
        </section>

    )
}

export default Works

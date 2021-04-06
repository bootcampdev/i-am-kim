import React from 'react'
import Navbar from "./Navbar.js"
import WorkCard from "./WorkCard.js"
import Footer from "./Footer.js"
import Wrapper from "./Wrapper.js"
import portfolio from "../portfolio.json";

const Works = () => {

    console.log(portfolio)

    return (

        <section id="works">
            <Navbar />

            <div className="wrapper">

                {portfolio.map(work => (
                    <WorkCard
                        id={work.id}
                        key={work.id}
                        name={work.name}
                        image={work.image}
                        description={work.description}
                        githubsite={work.githubsite}
                        deploymentsite={work.deploymentsite}
                    />
                ))}
            </div>
            <Footer />
        </section>

    )
}

export default Works

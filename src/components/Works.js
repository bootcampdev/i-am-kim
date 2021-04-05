import React from 'react'
import Navbar from "./Navbar.js"
import WorkCard from "./WorkCard.js"
import Wrapper from "./Wrapper.js"
import portfolio from "../portfolio.json";

const Works = () => {

    console.log(portfolio)

    return (

        <section id="works">
           
        <Navbar />      
      

        <div className="wrapper App-background">

            { portfolio.map(work => (
                <WorkCard
                    id={work.id}
                    key={work.id}
                    name={work.name}
                    image={work.image}
                    description={work.description}
                    githubsite={work.githubsite}
                    deploymentsite={work.deploymentsite}
                    />
            )) }

            {/* <WorkCard
                id={portfolio[0].id}
                key={portfolio[0].id}
                name={portfolio[0].name}
                image={portfolio[0].image}
                description={portfolio[0].description}
                features={portfolio[0].features}
            /> */}
        </div> 

        </section>
       
    )
}

export default Works

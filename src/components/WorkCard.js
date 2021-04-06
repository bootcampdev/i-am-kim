import React from 'react'

const WorkCard = (props) => {

    console.log(props);

    // let values = {props.features}.join();
    
    return (
        <div className="work-card">
            <div className="img-container">
                <img alt={ props.name } src={ props.image } />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> { props.name }
                    </li>
                    <li>
                        <strong>Description:</strong> {props.description}
                    </li>
                    <li>                       
                        <a href={ props.deploymentsite } 
                        style={{ marginRight: 30 }} target="_blank"
                        rel="noopener noreferrer">
                            Run Example</a>
                        <a href={ props.githubsite } target="_blank"
                        rel="noopener noreferrer">
                            Code Repository</a>
                    </li>
                    <li>
                        <strong>Features: </strong>
                        { props.features } 
                       
                    </li>
                </ul>
            </div>

        </div>
        
    )
}

export default WorkCard

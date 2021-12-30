import React from 'react'
import { NavLink } from 'react-router-dom'

const Projects = ({projects}) => {
    return (
        <div className='center'>
            <h1>My projects</h1>
            {projects.map(proj => 
            <p><NavLink to={`/projects/${proj.id}`}>{proj.name}</NavLink></p>)
}
            

        </div>
    )
}

export default Projects;



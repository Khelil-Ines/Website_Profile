import React from 'react'
import projects from '../projects.json'
import { useParams } from 'react-router'

const ProjectDetail = () => {
    
    const params =useParams();
    const project = projects.filter(proj=>proj.id==params.id)[0]
    
    return (
        <div className='center'>
            <h3 className='p1'>{project.name}</h3><br />
            <img style={{height:"200px"}} src={project.image} alt={project.name} /><br />
            {project.description}<br />
            <a href={project.link}>{project.link}</a>
        </div>
    )
}

export default ProjectDetail
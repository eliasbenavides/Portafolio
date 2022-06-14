import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import { GitHub } from '@material-ui/icons'
import '../styles/ProjectDisplay.css'

const ProjectDisplay = () => {

    const { id } = useParams()
    console.log(id)
    const project = ProjectList[id]


  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt="img" />
        <p>
            <b>Skills:</b> {project.skills}
        </p>
        <a target="_blank" href={project.url}>
          <GitHub />
        </a>
    </div>
  )
}

export default ProjectDisplay
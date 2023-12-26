import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ImageSlider from '../../components/helpers/ImageSlider'
import './ProjectDisplay.scss'

const ProjectDisplay = () => {
  const { id } = useParams()
  const project = projectList[id]

  if (!project) {
    return <div>Error: Project not found</div>
  }

  if (!Array.isArray(project.images)) {
    return <div>Error: Project images is not an array</div>
  }

  return (
    <div className="project container">
      <ImageSlider slides={project.images} />

      <h1>{project.name}</h1>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <FontAwesomeIcon icon={faGithub} className="gitIcon" />
    </div>
  )
}

export default ProjectDisplay

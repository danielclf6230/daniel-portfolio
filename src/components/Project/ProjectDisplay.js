import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
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

  const getGitHubLink = () => {
    switch (id) {
      case '0':
        return 'https://github.com/danielclf6230/cinematch'
      case '1':
        return 'https://github.com/danielclf6230/cinematch'

      default:
        return 'https://github.com/danielclf6230'
    }
  }

  return (
    <div className="project container">
      <ImageSlider slides={project.images} />

      <h1>{project.name}</h1>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a target="_blank" rel="noreferrer" href={getGitHubLink()}>
        <FaGithub className="gitIcon" />
      </a>
    </div>
  )
}

export default ProjectDisplay

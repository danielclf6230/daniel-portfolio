import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import ProjectItem from './ProjectItem'
import { projectList } from '../helpers/ProjectList'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container project-page">
        <div className="col text-zone project-hero">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className="projectList">
          {projectList.map((project, idx) => {
            return (
              <ProjectItem
                key={project.name}
                id={idx}
                name={project.name}
                image={project.image}
                skills={project.skills}
              />
            )
          })}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Project

import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectItem = ({ image, name, id, skills }) => {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      className="projectItem"
      onClick={() => {
        navigate('/project/' + id)
      }}
      aria-label={`Open ${name} project`}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
      ></div>
      <div className="projectCardOverlay"></div>
      <div className="projectCardContent">
        <span className="projectCardLabel">Featured Build</span>
        <h2>{name}</h2>
        <p>{skills}</p>
        <span className="projectCardAction">View Case Study</span>
      </div>
    </button>
  )
}

export default ProjectItem

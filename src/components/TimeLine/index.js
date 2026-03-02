import './index.scss'
import { ReactComponent as WorkIcon } from './work.svg'
import { ReactComponent as SchoolIcon } from './school.svg'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import timelineElements from './timelineElements'

const TimeLine = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['T', 'i', 'm', 'e', 'l', 'i', 'n', 'e']}
          idx={15}
        />
      </h1>

      <div className="timeline-list">
        {timelineElements.map((element, index) => {
          const isWorkIcon = element.icon === 'work'
          const showButton = element.buttonText?.trim()
          const Icon = isWorkIcon ? WorkIcon : SchoolIcon
          const sideClass = index % 2 === 0 ? 'is-right' : 'is-left'

          return (
            <article
              key={element.id}
              className={`timeline-item ${isWorkIcon ? 'is-work' : 'is-school'} ${sideClass}`}
            >
              <div className="timeline-marker" aria-hidden="true">
                <span className="timeline-icon">
                  <Icon />
                </span>
              </div>

              <div className="timeline-card">
                <p className="timeline-date">{element.date}</p>
                <h3 className="timeline-item-title">{element.title}</h3>
                <h5 className="timeline-item-subtitle">{element.location}</h5>
                <ul className="description">
                  {element.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                {showButton && (
                  <a
                    className={`button ${isWorkIcon ? 'workButton' : 'schoolButton'}`}
                    href="https://github.com/danielclf6230"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {element.buttonText}
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default TimeLine

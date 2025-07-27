import './index.scss'
import { ReactComponent as WorkIcon } from './work.svg'
import { ReactComponent as SchoolIcon } from './school.svg'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import timelineElements from './timelineElements'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const TimeLine = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  const workIconStyles = { background: '#06D6A0' }
  const schoolIconStyles = { background: '#f9c74f' }

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['T', 'i', 'm', 'e', 'l', 'i', 'n', 'e']}
          idx={15}
        />
      </h1>

      <div className="timeline-wrapper">
        <VerticalTimeline lineColor="#00bfa6">
          {timelineElements.map((element) => {
            const isWorkIcon = element.icon === 'work'
            const showButton = element.buttonText?.trim()

            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="timeline-date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <ul className="description">
                  {element.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? 'workButton' : 'schoolButton'
                    }`}
                    href="https://github.com/danielclf6230"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default TimeLine

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

  let workIconStyles = { background: '#06D6A0' }
  let schoolIconStyles = { background: '#f9c74f' }

  return (
    <div>
      <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['T', 'i', 'm', 'e', 'l', 'i', 'n', 'e']}
          idx={15}
        />
      </h1>

      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === 'work'
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== ''

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? 'workButton' : 'schoolButton'
                  }`}
                  href="https://github.com/danielclf6230"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default TimeLine

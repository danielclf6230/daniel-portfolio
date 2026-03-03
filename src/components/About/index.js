import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import TimeLine from '../TimeLine'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className="aboutme-p">
            SAIT IT student focused on React, Socket.IO, Java, and Python, with
            hands-on experience across HTML, CSS, JavaScript, and SQL-based
            databases. I build practical, full-stack solutions and enjoy turning
            technical problems into clean, usable systems.
          </p>
        </div>
        <div className="timeline-wrap">
          <TimeLine />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

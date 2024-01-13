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
            IT student at Southern Alberta Institute of Technology (SAIT) with
            expertise in React, Socket Io, Java, Python and a strong foundation
            in web development technologies (HTML, CSS, JS). Proficient in
            database platforms including SQL, PLSQL, MySQL, PostgreSQL, and
            SQLPLUS. Eager to contribute technical skills and a passion for
            innovation to a dynamic IT role.
          </p>
        </div>
        <div className="map-wrap">
          <TimeLine />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

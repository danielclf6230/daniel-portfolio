import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

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
          <p>
            IT student at Southern Alberta Institute of Technology (SAIT) with
            expertise in React, Socket Io, Java, and a strong foundation in web
            development technologies (HTML, CSS, JS). Proficient in database
            platforms including SQL, PLSQL, MySQL, PostgreSQL, and SQLPLUS.
            Eager to contribute technical skills and a passion for innovation to
            a dynamic IT role.
          </p>
          <p>
            In my most recent position as an IT support engineer at a Law Firm,
            I developed a keen understanding of user needs and expectations.
            This unique perspective, combined with my coding skills, positions
            me as a versatile frontend developer capable of addressing
            challenges in a fast-paced development environment. During my time
            at the Law Firm, I honed my ability to troubleshoot and resolve
            issues promptly, ensuring a seamless user experience.
          </p>
          <p></p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

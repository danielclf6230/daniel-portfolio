import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const SERVICE_ID = 'service_u1on40i'
const TEMPLATE_ID = 'template_a9csy48'
const PUBLIC_KEY = '4WR6IuD-U9RdzCu0h'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Daniel Chow',
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in frontend or backend opportunities - especially on
            react projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </li>
                <li>
                  <button type="submit" className="flat-button">
                    Submit
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <div className="info-map">
            Daniel Chow,
            <br />
            Canada,
            <br />
            Calgary
            <br />
            <span>daniel@allenchow.com</span>
          </div>
          <MapContainer center={[51.04305141087725, -114.07205002774839]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.04305141087725, -114.07205002774839]}>
              <Popup>Daniel lives here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

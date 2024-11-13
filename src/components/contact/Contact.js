import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
// import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import twitter from '../../images/social/twitter.jpg'
import medium from '../../images/social/medium.jpg'
import Typewriter from 'typewriter-effect'

const Contact = () => {
  return (
    <Section title="Contact">
      {/* <ContactForm /> */}
      <div className='contactMe'>
        <h4>Contact Me<br />@ +91 7002254439<br />hrishikeshkalita11@gmail.com</h4>
      </div>
      <h1 className="greeting-text">
        <Typewriter
                  options={{
                    strings: [
                      'Feel free to contact me',
                      'Looking forward to adding value',
                      'Left the following doors open for you '
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                    cursor: '<',
                    delay: 100,
                  }}
                />
      </h1>
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/darkhorse1998/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/hrishikesh-kalita/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>

          <a
            href="https://twitter.com/Hrishik25081162/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter Logo" width="40px" />
          </a>

          <a
            href="https://medium.com/@hrishikeshkalita11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={medium} alt="Medium Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact

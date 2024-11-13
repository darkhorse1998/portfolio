import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
// import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm Hrishikesh{' '}
              <span role="img" aria-label="lightning">
                😄
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              It's been a journey of fate, and I have found my domain; Cloud & DevOps it is!
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              In my span of 3.5+ years, I have always tried to put myself in areas outside my comfort zone and that has played really well for me, resulting in an exponential learning curve.
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              Mostly you will find me working and consistently learning new things.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'learning new technologies',
                    'finance & stock markets',
                    'solving problems',
                    'reading books',
                    'fixing hard-to-fix bugs',
                    'investing and finance stuff',
                    'collaborating with others',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
              [ <b>2021-2022</b> - years of change ] - I had started my professional career, I started reading some quality books,
              I learnt about personal finance and financial planning which enabled me to manage my money by myself; 
              a big confidence boost.
              {/* <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                projects
              </Link> */}
            </p>
            <p>
              [ <b>2023-2024</b> - years of exponential growth ] - I got my first cloud certification in Azure; AZ-104 Azure Administrator. 
              I am also upskilling myself, learning new technologies, getting hands-on, writing articles in Medium.
              {/* <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                projects
              </Link> */}
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              Striving to make myself better each and everyday!
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>India</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About

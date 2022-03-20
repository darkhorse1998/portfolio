import React from 'react'
import './SelfProjectCard.css'
import Typewriter from 'typewriter-effect'


const SelfProjectCard = ({ project }) => {
  let { link, company, title, dateFrom, dateTo, info, stack, complete } = project
  var progress = ""
  if(complete){
    progress = "Complete";
  }
  else {
    progress = "Ongoing";
  }
  const dots = new Array(progress.length + 2).join('. ');
  return (
    <React.Fragment>
    <a
      className="project-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      
      <div className="project-card-wrapper">
        <div className="project-card">
          <div className="project-card-top">
            <div
              className="project-bg"
              style={{ background: project.colourPrimary }}
            ></div>
            <h2>{company}</h2>
            
            <div className="image-wrapper">
              <div
                className="project-bg logo-bg"
                style={{
                  background: project.colourSecondary
                    ? project.colourSecondary
                    : project.colourPrimary,
                }}
              >
            
            <h5 className='progress'>{progress}
            {!complete &&
            <Typewriter
                options={{
                    strings: [dots],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                    cursor: '',
                    delay: 80,
                }}
            />}
            </h5>
              </div>
              
              {/* <img
                className="company-logo"
                src={require(`../../images/logos/${company
                  .replace(/ /g, '')
                  .toLowerCase()}.png`)}
                alt={`${company}-logo`}
                style={
                  project.logoheight
                    ? {
                        height: `${project.logoheight}%`,
                      }
                    : { width: `${project.logowidth}%` }
                }
              /> */}
            </div>
          </div>
          <div className="project-card-bottom">
            <div>
            
              <h2>{title}</h2>
              <h3>
                {dateFrom} - {dateTo}
              </h3>
              <ul>
                {info.map((point, idx) => (
                  <li key={`${company}-point-${idx}`}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="project-card-tech">
              <ul>
                {stack.map((tech) => (
                  <li key={`${company}-${tech}`}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    </React.Fragment>
  )
}

export default SelfProjectCard;

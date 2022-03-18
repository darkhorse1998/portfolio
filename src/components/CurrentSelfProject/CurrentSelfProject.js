import React from 'react'
import './CurrentSelfProject.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import SelfProjectCard from '../SelfProjectCard/SelfProjectCard';
import selfProjectData from '../../data/self_projects.json'


const CurrentSelfProject = () => {
    return(
    <Section title="Project">
        <div className="project-content">
            <ul className="project-list">
            {selfProjectData.selfProject.reverse().map((project) => (
                <li key={`project-${project.company}`}>
                <Fade bottom duration={1000} distance="20px">
                    <SelfProjectCard project={project} />
                </Fade>
                </li>
            ))}
            </ul>
            </div>
    </Section>
    )
}

export default CurrentSelfProject;
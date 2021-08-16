import React from 'react'
import "./Projects.scss"
import { projects } from '../../Dummydata'
import Project from './Project'

const Projects = () => {
    return (
        <>
          <div className="projectsdiv" id="Projects">
            <h1 className="heading">Projects</h1>
            <div className="projects">
                {projects.map((f)=>(
                    <Project key={f.id} project={f}/>
                ))         
                }
            </div>
            </div>  
        </>
    )
}

export default Projects

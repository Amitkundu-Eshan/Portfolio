import React from 'react'

const Project = ({project}) => {
    return (
        <>
        <div className="project">
            <img className="propic" src={project.pic} alt=""/>
            <p className="prohed">{project.projectname}</p>
            <p className="textar">{project.about}</p>
            <span className="button">Explore</span>
        </div>  
        </>
    )
}

export default Project

/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useWindowDimensions from '../hooks/useWindowDementions'
import { ProjectCardType } from '../types/types'

interface ProjectCardProps {
  project: ProjectCardType
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate()

  return (
    <div className='projectCardWrapper'>
      <h1>{project.attributes.projectName}</h1>
      <p>{project.attributes.shortDescription}</p>
      <div className='projectCardImageContainer'>
        <img
          className='projectCardImage'
          src={`https://api.andreassen.dev${project.attributes.cover.data.attributes.url}`}
          alt='coverPicture'
        ></img>
      </div>
      <button className='button' onClick={() => navigate(`/projects/${project.id}`)}>
        Learn more
      </button>
    </div>
  )
}

export default ProjectCard

/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
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
          src={`${process.env.REACT_APP_API_URL}${project.attributes.cover.data.attributes.url}`}
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

/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { Project } from '../types/types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate()

  return (
    <div className='projectCardWrapper'>
      <h1>{project.projectName}</h1>
      <p>{project.projectShortDescription}</p>
      <div className='projectCardImageContainer'>
        <img className='projectCardImage' src={project.coverUrl} alt='coverPicture'></img>
      </div>
      <button className='button' onClick={() => navigate(`/projects/${project._id}`)}>
        Learn more
      </button>
    </div>
  )
}

export default ProjectCard

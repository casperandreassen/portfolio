import { ButtonProps, IconButton, styled } from '@mui/material'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import '../styles/ProjectList.css'
import { Project } from '../types/types'
import { grey } from '@mui/material/colors'

const StyledIconButton = styled(IconButton)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[200],
  '&:hover': {
    backgroundColor: grey[400],
  },
}))

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios
      .get('http://localhost:4500/api/v1/content/getProjects')
      .then((response: AxiosResponse) => {
        setProjects(response.data.data)
      })
  }, [])
  return (
    <div className='projectListContainer'>
      {projects?.map((project: Project) => {
        return (
          <div key={project._id}>
            <p>{project.projectName}</p>
            <StyledIconButton color='primary' aria-label='editProject'>
              <ModeEditIcon />
            </StyledIconButton>
            <StyledIconButton color='primary' aria-label='editProject'>
              <DeleteIcon />
            </StyledIconButton>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectList

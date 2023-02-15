import { useEffect, useState } from 'react'
import axios, { type AxiosResponse } from 'axios'
import ProjectCard from '../components/ProjectCard'
import '../styles/projectPage.css'
import { ProjectCardType } from '../types/types'
import useWindowDimensions from '../hooks/useWindowDementions'

/* Image needs to be 500x500 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Projects = () => {
  const [projects, setProjects] = useState<ProjectCardType[]>([])
  const { width } = useWindowDimensions()

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:1337/api/projects?fields[0]=projectName&fields[1]=shortDescription&fields[2]=projectId&populate[cover]=url',
    }).then((response: AxiosResponse) => {
      setProjects(response.data.data)
      console.log(response.data.data)
    })
  }, [])

  return (
    <div className='projectPageWrapper'>
      <div className='projectListContainer'>
        {projects.map((project: ProjectCardType, index: number) => {
          return (
            <div key={index}>
              <ProjectCard project={project} />
              {index - (projects.length - 1) !== 0 ? <div className='itemDivider'></div> : <></>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects

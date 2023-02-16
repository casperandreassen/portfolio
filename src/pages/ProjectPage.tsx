import axios, { type AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { type Project } from '../types/ProjectType'
import '../styles/projectContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const ProjectPage = () => {
  const params = useParams()
  const [project, setProject] = useState<Project | undefined>()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projects/${params.projectId}?populate=*`)
      .then((response: AxiosResponse) => {
        setProject(response.data as Project)
      })
  }, [params.projectId])

  return (
    <div className='projectPageWrapper'>
      <div className='articleContainer'>
        <h1>{project?.data.attributes.projectName}</h1>
        <div className='metadataContainer'>
          <p className='metaDataDescription'>{project?.data.attributes.shortDescription}</p>
          <img
            className='projectCardImage'
            src={`http://localhost:1337${project?.data.attributes.cover.data.attributes.url}`}
            alt='coverPicture'
          ></img>
          <div className='articleInfoRow'>
            <div>
              <Link
                to={project?.data.attributes.gitRepo || '/'}
                target='_blank'
                className='articleInfoRowLink'
              >
                <FontAwesomeIcon size='2x' icon={brands('github')} />
              </Link>
            </div>
            <div>
              <p>
                Updated{' '}
                {new Date(project?.data.attributes.updatedAt || '').toLocaleDateString('en-GB')}
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div
          className='articleBody'
          dangerouslySetInnerHTML={{ __html: project?.data.attributes.post || '<p></p>' }}
        ></div>
      </div>
    </div>
  )
}

export default ProjectPage

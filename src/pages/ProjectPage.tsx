import axios, { type AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { type Project } from '../types/types'
import '../styles/projectContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ProjectPage = () => {
  const params = useParams()
  const [project, setProject] = useState<Project | undefined>()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      .get(`http://localhost:1337/api/projects/${params.projectId}?populate=*`)
      .then((response: AxiosResponse) => {
        setProject(response.data.data as Project)
      })
  }, [params.projectId])
  console.log(project)

  return (
    <div className='projectPageWrapper'>
      <div className='articleContainer'>
        <h1>{project?.attributes.projectName}</h1>
        <div className='metadataContainer'>
          <p className='metaDataDescription'>{project?.attributes.shortDescription}</p>
          <img
            className='projectCardImage'
            src={`http://localhost:1337${project?.attributes.cover.data.attributes.url}`}
            alt='coverPicture'
          ></img>
          <div className='articleInfoRow'>
            <div>
              <Link
                to={project?.attributes.gitRepo || '/'}
                target='_blank'
                className='articleInfoRowLink'
              >
                <FontAwesomeIcon size='2x' icon={brands('github')} />
              </Link>
            </div>
            <div>
              <p>
                Updated {new Date(project?.attributes.createdAt || '').toLocaleDateString('en-GB')}
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div
          className='articleBody'
          dangerouslySetInnerHTML={{ __html: project?.attributes.post || '<p></p>' }}
        ></div>
      </div>
    </div>
  )
}

export default ProjectPage

import axios, { type AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { type Project } from '../types/types'
import ReactMarkdown from 'react-markdown'
import '../styles/projectContent.css'

interface ImageProps {
  src?: string
}

const components = {
  img: ({ src }: ImageProps) => <img src={src} className='blogImage'></img>,
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ProjectPage = () => {
  const params = useParams()
  const [project, setProject] = useState<Project>()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      .get(`https://api.andreassen.dev/api/projects/${params.projectId}`)
      .then((response: AxiosResponse) => {
        setProject(response.data.data as Project)
      })
  }, [params.projectId])

  return (
    <div className='projectPageWrapper'>
      <div className='articleContainer'>
        <h1>{project?.attributes.projectName}</h1>
        <div className='metadataContainer'>
          <p>{project?.attributes.publishedAt}</p>
          <p>{project?.attributes.updatedAt}</p>
        </div>
        <ReactMarkdown
          transformImageUri={(uri) => {
            return uri.startsWith('http') ? uri : `https://api.andreassen.dev${uri}`
          }}
          components={components}
          // eslint-disable-next-line react/no-children-prop
          children={String(project?.attributes.post)}
        />
      </div>
    </div>
  )
}

export default ProjectPage

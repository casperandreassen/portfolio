import axios, { type AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { type Project } from '../types/types';
import * as DOMPurify from 'dompurify';
import '../styles/projectContent.css'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ProjectPage = () => {
  const params = useParams();
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      .get(`http://localhost:4500/api/v1/content/getProject/${params.projectId}`)
      .then((response: AxiosResponse) => {
        setProject(response.data.data as Project);
      });
  }, [params.projectId]);

  return (
    <div className="projectPageWrapper">
      <section className="articleContainer">
        <h1>{project?.projectName}</h1>
        <div className="metadataContainer">
          <p>{project?.projectAuthor}</p>
        </div>
        <section className="articleBody" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize( window.atob(project?.documentBody !== undefined ? project.documentBody : '') || '')}}>
        </section>
      </section>
    </div>
  );
};

export default ProjectPage;


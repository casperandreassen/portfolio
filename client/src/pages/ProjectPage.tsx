import axios, { type AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { type Project } from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import '../styles/project.css';
import ContentPill from '../components/ContentPill';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ProjectPage = () => {
  const params = useParams();
  console.log(params);
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      .get(`http://localhost:4500/api/v1/content/getProject/${params.projectId}`)
      .then((response: AxiosResponse) => {
        console.log(response);
        setProject(response.data.data);
      });
  }, []);

  return (
    <div className="projectPageWrapper">
      <div className="projectHeader">
        <h1>{project?.projectName}</h1>
        <div className="projectLinks">
          <div className="linkItem">
            <a
              href={project?.linkToRepo}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}>
              <FontAwesomeIcon icon={brands('github')} size="3x" />
            </a>
            <p>Repository</p>
          </div>
          <div className="linkItem">
            <a
              href={project?.linkToVideoDemo}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}>
              <FontAwesomeIcon icon={brands('youtube')} size="3x" />
            </a>
            <p>Demo</p>
          </div>
        </div>
      </div>
      <div className="techContainer">
        <h2>Technologies used</h2>
        <div className="pillContainer">
          {project?.techUsed.map((tech: string) => {
            return <ContentPill key={tech} name={tech} />;
          })}
        </div>
      </div>
      <div className="projectDescription">{project?.projectDescription}</div>
    </div>
  );
};

export default ProjectPage;

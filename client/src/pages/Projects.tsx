import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { type AxiosResponse } from 'axios';
import ProjectCard from '../components/ProjectCard';
import '../styles/projectPage.css'

export interface Project {
  projectId: number;
  projectName: string;
  projectShortDescription: string;
  projectDescription: string;
  projectAuthor: string;
  createdDate: Date;
  linkToRepo: string;
  linkToLiveDemo: string | undefined;
  linkToVideoDemo: string;
  pictureUrl: string;
  techUsed: string[];
}

/* Image needs to be 500x500 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios
      .get(`http://localhost:4500/api/v1/content/getProjects`)
      .then((response: AxiosResponse) => {
        setProjects(response.data.data);
      });
  }, []);

  return (
    <div className="projectPageWrapper">
      <div className="projectListContainer">
      {projects.map((project: Project, index: number) => {
      return (
        <div key={project.projectId}>
        <ProjectCard project={project} />
        {(index - (projects.length - 1)) !== 0 ? <div className="itemDivider"></div> : <></>}
        </div>
      )
    })}
      </div>
    </div>
  );
};

export default Projects;

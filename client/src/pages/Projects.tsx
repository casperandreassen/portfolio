import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { type AxiosResponse } from 'axios';

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
        console.log(response);
        setProjects(response.data.data);
      });
  }, []);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const openProject = (projectId: number) => {
    navigate('/projects/' + String(projectId));
  };

  return (
    <></>
  );
};

export default Projects;

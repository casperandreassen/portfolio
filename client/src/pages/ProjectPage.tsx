import axios, { type AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { type Project } from './Projects';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ProjectPage = () => {
  const params = useParams();
  console.log(params);
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      .get(`http://localhost:4500/api/v1/project/${params.projectId}`)
      .then((response: AxiosResponse) => {
        console.log(response);
        setProject(response.data.data);
      });
  }, []);

  return (
    <div>
      <p>{project?.projectName}</p>
    </div>
  );
};

export default ProjectPage;

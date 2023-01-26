import '../styles/projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
}

/* Image needs to be 500x500 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios.get(`http://localhost:4500/api/v1/projects`).then((response: AxiosResponse) => {
      console.log(response);
      setProjects(response.data.data);
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const openProject = (projectId: number) => {
    navigate('/projects/' + String(projectId));
  };

  return (
    <div className="projectsWrapper">
      <div className="projectsDescription">
        <h1>Projects</h1>
        <p>
          Below you can find some of my projects! Some are large fullstack applications made with
          various technologies. Some are made alone by me. Others are made in groups. Take a look!
        </p>
      </div>
      <div className="projectsGrid">
        {projects?.map((project: Project) => {
          return (
            <Card
              key={String(project.projectId)}
              className="text-center"
              style={{ width: '17rem' }}>
              <Card.Img variant="top" src={project.pictureUrl} />
              <Card.Body>
                <Card.Title>{project.projectName}</Card.Title>
                <Card.Text>{project.projectShortDescription}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    openProject(project.projectId);
                  }}>
                  More info
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

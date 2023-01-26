import '../styles/projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

interface Project {
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

const projects: Project[] = [
  {
    projectId: 123451,
    projectName: 'Movsearch',
    projectDescription: 'A React Native iOS client for the movsearch application.',
    projectShortDescription: 'A React Native iOS client for the movsearch application.',
    projectAuthor: 'Casper Andreassen',
    createdDate: new Date(),
    linkToRepo: 'https://github.com/casperandreassen/movsearch',
    linkToLiveDemo: undefined,
    linkToVideoDemo: 'https://youtu.be/2unZmy3-2N4',
    pictureUrl: 'https://i.ibb.co/sRJZRKq/Logo-Circle.png'
  },
  {
    projectId: 123455641,
    projectName: 'CryptoCojo',
    projectDescription: 'A Java backend with React frontend. ',
    projectShortDescription: 'A Java backend with React frontend',
    projectAuthor: 'Casper Andreassen',
    createdDate: new Date(),
    linkToRepo: 'https://github.com/casperandreassen/cryptocojo',
    linkToLiveDemo: undefined,
    linkToVideoDemo: 'https://youtu.be/dXe-v0XUmVQ',
    pictureUrl: 'https://i.ibb.co/BsGJhyS/logo-transparent.png'
  }
];
/* Image needs to be 500x500 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Projects = () => {
  const navigate = useNavigate();

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
        {projects.map((project: Project) => {
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

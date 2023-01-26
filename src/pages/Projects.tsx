import '../styles/projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type Project = {
  projectId: Number;
  projectName: String;
  projectDescription: String;
  projectAuthor: String;
  createdDate: Date;
  linkToRepo: String;
  linkToLiveDemo: String | undefined;
  linkToVideoDemo: String;
  pictureUrl: String;
};

const projects: Project[] = [
  {
    projectId: 123451,
    projectName: 'Movsearch',
    projectDescription: 'A React Native iOS client for the movsearch application. ',
    projectAuthor: 'Casper Andreassen',
    createdDate: new Date(),
    linkToRepo: 'https://github.com/casperandreassen/movsearch',
    linkToLiveDemo: undefined,
    linkToVideoDemo: 'https://youtu.be/2unZmy3-2N4',
    pictureUrl: 'String'
  }
];

const Projects = () => {
  return (
    <div className="projectsWrapper">
      <div className="projectsDescription">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="projectsGrid">
        {projects.map((project: Project) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
              <Card.Title>{project.projectName}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

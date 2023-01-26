import { useParams } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ProjectPage = () => {
  const params = useParams();

  console.log(params);

  return <></>;
};

export default ProjectPage;

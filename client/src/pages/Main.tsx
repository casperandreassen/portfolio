import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Main = () => {
  return (
      <>
        <NavBar />
        <Outlet />
      </>
  );
};

export default Main;

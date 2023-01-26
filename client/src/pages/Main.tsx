import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Main = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
};

export default Main;

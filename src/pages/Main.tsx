import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';

const Main = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
};

export default Main;

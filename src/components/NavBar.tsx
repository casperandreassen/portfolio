import ThemeToggle from './ThemeToggle'
import '../styles/navBar.css'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()

  return (
    <div className='desktopNavbar'>
      <div className='navLinks'>
        <Link
          data-testid='navLinkHome'
          className={`navLinkItem ${
            String(location.pathname) === '/' ? 'selectedNavLink' : 'unSelectedNavLink'
          }`}
          to='/'
        >
          HOME
        </Link>
        <Link
          data-testid='navLinkProjects'
          className={`navLinkItem ${
            String(location.pathname).includes('/projects')
              ? 'selectedNavLink'
              : 'unSelectedNavLink'
          }`}
          to='/projects'
        >
          PROJECTS
        </Link>
      </div>
      <ThemeToggle />
    </div>
  )
}

export default NavBar

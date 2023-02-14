import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NavBarMobile from '../components/NavBarMobile'
import useWindowDimensions from '../hooks/useWindowDementions'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Main = () => {
  const { width } = useWindowDimensions()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100%',
      }}
      className='mainContainer'
    >
      {width < 640 ? <NavBarMobile /> : <NavBar />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main

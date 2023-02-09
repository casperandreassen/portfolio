import { Route, Routes } from 'react-router-dom'
import CreateProject from './pages/CreateProject'
import Home from './pages/Home'
import Login from './pages/Login'
import Main from './pages/Main'
import ProjectPage from './pages/ProjectPage'
import Projects from './pages/Projects'
import PrivateRoutes from './utils/PrivateRoute'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:projectId' element={<ProjectPage />} />
        </Route>
        <Route path='/manage' element={<PrivateRoutes />}>
          <Route path='/manage/projects' element={<CreateProject />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App

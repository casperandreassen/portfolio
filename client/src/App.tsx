import { Route, Routes } from 'react-router-dom'
import CreateProject from './manage_components/CreateProject'
import Home from './pages/Home'
import Login from './pages/Login'
import Main from './layouts/Main'
import ProjectPage from './pages/ProjectPage'
import Projects from './pages/Projects'
import PrivateRoutes from './utils/PrivateRoute'
import ManageProjects from './manage_pages/ManageProjects'
import ManageAssets from './manage_pages/ManageAssets'

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
          <Route path='/manage/projects' element={<ManageProjects />} />
          <Route path='/manage/assets' element={<ManageAssets />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App

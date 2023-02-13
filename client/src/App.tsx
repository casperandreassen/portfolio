import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Main from './layouts/Main'
import ProjectPage from './pages/ProjectPage'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:projectId' element={<ProjectPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

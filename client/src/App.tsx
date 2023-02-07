import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateProject from './pages/CreateProject';
import Home from './pages/Home';
import Main from './pages/Main';
import ProjectPage from './pages/ProjectPage';
import Projects from './pages/Projects';
import { userContext } from './context/userContext';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
          </Route>
          <userContext.Provider
          <Route path="/admin/createProject" element={<CreateProject />}/>
        </Routes>
    </>
  )
}

export default App;

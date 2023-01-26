import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/contact"></Route>
      </Route>
    </Routes>
  );
}

export default App;

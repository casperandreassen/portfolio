import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Projects from './pages/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact"></Route>
      </Route>
    </Routes>
  );
}

export default App;

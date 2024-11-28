import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./Main/Main";
// import ProjectDetail from './Component/Project/ProjectDetail';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          {/*<Route path='/project/:projectParamsName' element={<ProjectDetail/>}/>*/}
        </Routes>
      </Router>
  );
}

export default App;
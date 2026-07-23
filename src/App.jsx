  import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./components/NavBar/Nav";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

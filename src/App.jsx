  import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./components/NavBar/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="" />
        <Route path="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

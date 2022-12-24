import Navbar from "./components/navbar/NavbarLogOff.js"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/pages/Main"
import Cadastro from "./components/pages/MainCadastro"
import Login from "./components/pages/MainLogin"

import Style from "./css/main/stylesMain.module.css"

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
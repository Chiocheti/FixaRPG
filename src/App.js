import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavbarlogOff from "./components/navbar/NavbarLogOff.js";
import NavbarlogOn from "./components/navbar/NavbarLogOn.js";

import Home from "./components/pages/Main"
import Cadastro from "./components/pages/MainCadastro"
import Login from "./components/pages/MainLogin"

import UserPage from "./components/pages/UserPage"
import Fixa from "./components/pages/Fixa"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<NavbarlogOff/>}/>
          <Route path="/Login" element={<NavbarlogOff/>}/>
          <Route path="/Cadastro" element={<NavbarlogOff/>}/>
          <Route path="/logued/Fixa" element={<NavbarlogOn/>}/>
          <Route path="/logued/UserPage" element={<NavbarlogOn/>}/>
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/logued/Fixa" element={<Fixa />} />
          <Route path="/logued/UserPage" element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
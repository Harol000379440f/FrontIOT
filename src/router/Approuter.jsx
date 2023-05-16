import { Route, Routes } from "react-router-dom";
import { Home } from "../pags/Home";
import { Login } from "../pags/Login";
import { Usuario } from "../pags/usuario";
import { Usuarios } from "../pags/Usuarios";
import { Registro } from "../pags/Registro";
export const Approuter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Usuario/:id" element={<Usuario />} />
        <Route path="/Usuario" element={<Usuarios />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </div>
  );
};

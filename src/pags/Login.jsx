import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosController } from "../helper/axios";
import { ConsumoContext } from "../context/consumoContext";

export const Login = () => {
  const { onlogin } = useContext(ConsumoContext);
  const [inputUsuario, setinputUsuario] = useState("");
  const [inputCorreo, setinputCorreo] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const navigate = useNavigate();
  const login = () => {
    if (inputUsuario === "" || inputCorreo === "" || inputPassword === "") {
      console.log("Debe completar todos los campos");
    } else {
      onlogin;
      /*       axiosController
        .post("/usuarios", {
          nombre: inputUsuario,
          correo: inputCorreo,
          contraseña: inputPassword,
        })
        .then((response) => {
          console.log(response.data);
          setTimeout(() => {
            navigate("/Consumo");
          }, 2000);
        })
        .catch((error) => console.log(error)); */
    }
  };
  const formulario = (event) => {
    event.preventDefault();
  };

  /* const mover= ()=> {
        navigate("/Consumo")
    } */
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={formulario}>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            value={inputUsuario}
            onChange={(event) => setinputUsuario(event.target.value)}
            type="text"
            name="txt"
            placeholder="User name"
            required=""
          />
          <input
            value={inputCorreo}
            onChange={(event) => setinputCorreo(event.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            required=""
          />
          <input
            value={inputPassword}
            onChange={(event) => setinputPassword(event.target.value)}
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button onClick={login}>Sign up</button>
        </form>
      </div>
    </div>
  );
};

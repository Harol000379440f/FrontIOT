import { useState } from "react";
import { axiosController } from "../helper/axiosControler";

export const Registro = () => {
  const [inputUsuario, setinputUsuario] = useState("");
  const [inputCorreo, setinputCorreo] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const register = () => {
    axiosController
      .post("/users", {
        name: inputUsuario,
        email: inputCorreo,
        password: inputPassword,
      })
      .then((response) => console.log("usuario registrado con exito"));
  };
  return (
    <>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
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
            <button onClick={register}>Sign up</button>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

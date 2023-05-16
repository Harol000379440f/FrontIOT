import { createContext, useContext, useEffect, useState } from "react";
import { axiosController } from "../helper/axios";
const consumoC = createContext({});
export const ConsumoContext = (props) => {
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    axiosController.get("/usuarios").then((response) => {
      setData(response.data);
    });
  }, []);

  const onlogin = () => {
    axiosController.post("/usuarios").then((response) => {
      setDataUser(response.data);
    });
  };

  return (
    <ConsumoC.Provider value={{ data, setData, dataUser }}>
      {props.children}
    </ConsumoC.Provider>
  );
};
export const useConsumoC = () => {
  return useContext(consumoC);
};

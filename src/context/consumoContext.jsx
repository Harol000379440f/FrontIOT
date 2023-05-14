import { createContext, useContext, useEffect, useState } from "react";
import { axiosController } from "../helper/axios";
const consumoC = createContext({});
export const consumoContext = (props) => {
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    axiosController.get("/usuarios").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <consumoC.Provider value={{ data, setData, dataUser }}>
      {props.children}
    </consumoC.Provider>
  );
};
export const useConsumoC = () => {
  return useContext(consumoC);
};

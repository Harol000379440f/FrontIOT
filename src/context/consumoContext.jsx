import { createContext, useContext, useState } from "react";
const UsersConsumoContext = createContext({});

export const consumoContext = () => {
  /*  const [] */
  return <div>consumoContext</div>;
};
export const useConsumoContext = () => {
  return useContext(UsersConsumoContext);
};

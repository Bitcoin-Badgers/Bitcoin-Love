import React, { createContext, useContext, useState } from "react";

type INIT_STATE_TYPE = {};

const INIT_STATE = {};

export const StateContext = createContext<INIT_STATE_TYPE>(null!);

const StateLogic = (props: React.PropsWithChildren<{}>) => {
  let contextValue = {};

  return (
    <StateContext.Provider value={{ ...contextValue }}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateLogic;

export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppStateProvider");
  }
  return context;
};

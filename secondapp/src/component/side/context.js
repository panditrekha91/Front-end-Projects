import React, { useState } from "react";


// Step - 1 This is our first step to create context service. 
export const contextStore = React.createContext({
  state: 0,
  updateFun: () => {},
});

// Step - 2 This is service provider to provide access to other component.
export const ContextProvider = (props) => {
  const [counter, setUpdateCounter] = useState(0);

  const stateUpdateHandler = () => {
    setUpdateCounter(counter + 1);
  };

  return (
    <contextStore.Provider value={{ state: counter, updateFun: stateUpdateHandler }}>
        {props.children}
    </contextStore.Provider>
  );
};

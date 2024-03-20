import React, { createContext, useState, useContext } from "react";
const theme = createContext();

const Provider = ({ children }) => {
  const [themes, setTheme] = useState("LightTheme");
  const toggleTheme = () => {
    if (themes === "DarkTheme") {
      setTheme("LightTheme");
    } else {
      setTheme("DarkTheme");
    }
  };

  const valuesToShare = {
    themes,
    setTheme,
    toggleTheme,
  };
  return <theme.Provider value={valuesToShare}>{children}</theme.Provider>;
};

const useConText = () => {
  const context = useContext(theme);
  return context;
};

export { Provider, useConText };
export default theme;

import { useState, createContext, useContext } from "react";

const Theme = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <Theme.Provider value={[theme, setTheme]}>
      {children}
    </Theme.Provider>
  );
};

//custom hook
const useTheme = () => useContext(Theme);

export { useTheme, ThemeProvider };
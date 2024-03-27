import { Switch, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import DrawerAppBar from "./Components/DrawerAppBar";

const App = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: toggleDarkMode ? "#000000" : "#FFFFFF",
      },
      secondary: {
        main: toggleDarkMode ? "#000000" : "#000000",
      },
    },
  });

  return (
    <div>
      <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
      <Typography color="secondary">Vineet Batthina</Typography>
      <DrawerAppBar />
    </div>
  );
};

export default App;

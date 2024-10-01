import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: 14,
    h1: {
      fontFamily: '"Montserrat", sans-serif',
    },
  },
});

function AppThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;

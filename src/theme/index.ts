import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#0076DC",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#333333",
      secondary: "#999999",
    },
  },
  typography: {
    fontFamily: "Public Sans, Inter, sans-serif",
    fontSize: 14,
  },
});

export default theme;

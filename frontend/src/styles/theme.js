import { createMuiTheme } from "@material-ui/core/styles";

// The custom theme colors for the website
const theme = createMuiTheme({
  // Fonts
  typography: {
    fontFamily: '"Muli", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "4rem",
      fontWeight: "bold"
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "2rem",
      fontWeight: "bold"
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "1.5rem",
      fontWeight: "bold"
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "1rem",
      fontWeight: "bold"
    },
    h5: {
      fontFamily: '"Poppins", sans-serif'
    },
    h6: {
      fontFamily: '"Poppins", sans-serif'
    },
    body1: {
      fontSize: "1.125rem"
    }
  },
  // Color Palette
  palette: {
    type: "light",
    primary: {
      main: "#006772",
      light: "#049BAB",
      dark: "#049BAB", // This is active tint for primary button animations
      contrastText: "#FFF"
    },
    secondary: {
      main: "#320072",
      light: "#5906C4",
      dark: "#5906C4", // This is active tint for secondary button animations
      contrastText: "#FFF"
    },
    error: {
      main: "#F44336"
    },
    warning: {
      main: "#FF9800"
    },
    info: {
      main: "#2196F3"
    },
    success: {
      main: "#4CAF50"
    }
  },
  // Overriding defaults
  overrides: {
    MuiFilledInput: {
      root: { backgroundColor: "#f2f5f7" }
    },
    MuiButton: {
      root: {
        padding: "8px 20px",
        fontFamily: '"Poppins", sans-serif',
        textTransform: "none",
        fontStyle: "normal",
        fontSize: "20px",
        fontWeight: "bold",
        letterSpacing: "0px",
        borderRadius: "50px",
        border: 0
      }
    }
  },
  props: {
    MuiButton: {
      disableElevation: true // Disables the box shadows
    }
  }
});
export default theme;

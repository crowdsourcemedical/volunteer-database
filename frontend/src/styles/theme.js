import { createMuiTheme } from "@material-ui/core/styles";
import COLORS from './colors'

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
      fontSize: "1.25rem",
      fontWeight: "bold"
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "1rem",
      fontWeight: "bold"
    },
    h6: {
      fontFamily: '"Muli", sans-serif',
      fontSize: "1rem",
      color: COLORS.textSecondary
    },
    body1: {
      fontSize: "1rem",
      color: COLORS.textPrimary
    },
    caption: {
      fontFamily: '"Muli", sans-serif',
      textTransform: "uppercase",
      color: COLORS.textSecondary
    }
  },
  // Color Palette
  palette: {
    type: "light",
    primary: {
      main: COLORS.primary,
      light: COLORS.primaryLight,
      dark: COLORS.primaryDark,
      contrastText: "#FFF"
    },
    secondary: {
      main: COLORS.secondary,
      light: COLORS.secondaryLight,
      dark: COLORS.secondaryDark,
      contrastText: "#FFF"
    },
    text: {
      primary: COLORS.textPrimary,
      secondary: COLORS.textSecondary
    },
    error: {
      main: COLORS.error
    },
    warning: {
      main: COLORS.warning
    },
    info: {
      main: COLORS.info
    },
    success: {
      main: COLORS.success
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

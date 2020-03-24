import { createMuiTheme } from '@material-ui/core/styles';

import React, { Fragment } from 'react';

// Single source for colors for easy adjustments
// NOTE: Some colors are not being used but are part of the Figma
//    color palette. They have been included at this stage but can be removed
//    if they are never utilized.
const colors = {
  // Primary
  primary: '#006772',
  primaryLight: '#049BAB',
  primaryDark: '#049BAB', // This is active tint for primary button animations
  // Secondary
  secondary: '#320072',
  secondaryLight: '#5906C4',
  secondaryDark: '#5906C4', // This is active tint for secondary button animations
  // Tertiary
  tertiary: '#3E4C5E',
  // Grays
  grayDark: '#8D8D8F',
  grayMedium: '#DADADA',
  grayLight: '#F2F5F7',
  // Accent/error,
  accent: '#AB2346',
  // Text/font
  textPrimary: '#06070B',
  textSecondary: '#828282',
  // Status/toast
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',
  success: '#4CAF50',
};

const theme = createMuiTheme({
  // Fonts
  typography: {
    fontFamily: '"Muli", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '4rem',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: '"Muli", sans-serif',
      fontSize: '1rem',
      color: colors.textSecondary,
    },
    body1: {
      fontSize: '1rem',
      color: colors.textPrimary,
    },
    caption: {
      fontFamily: '"Muli", sans-serif',
      textTransform: 'uppercase',
      color: colors.textSecondary,
    },
  },
  // Color Palette
  palette: {
    type: 'light',
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: '#FFF',
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
      contrastText: '#FFF',
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
  },
  // Overriding defaults
  overrides: {
    MuiButton: {
      root: {
        padding: '8px 20px',
        fontFamily: '"Poppins", sans-serif',
        textTransform: 'none',
        fontStyle: 'normal',
        fontSize: '20px',
        fontWeight: 'bold',
        letterSpacing: '0px',
        borderRadius: '50px',
        border: 0,
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: true, // Disables the box shadows
    },
  },
});
export default theme;

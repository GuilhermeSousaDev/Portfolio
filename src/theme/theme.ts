import { createTheme } from '@mui/material/styles';
import { grey, purple } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#5135F0',
    },
    secondary: {
      main: "#fff",
    },
    text: {
      primary: '#5135F0',
      secondary: purple[200],
      disabled: purple[100],
    },
    success: {
      main: "#5135F0"
    }
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#E66D32',
    },
    secondary: {
      main: "#000",
    },
    text: {
      primary: '#E66D32',
      secondary: grey[700],
      disabled: grey[800],
    },
    success: {
      main: "#E66D32"
    }
  },
});

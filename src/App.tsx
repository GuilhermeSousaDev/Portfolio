import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './theme/theme';
import Main from './app/index';
import SnackbarApp from './components/Snackbar';
import { useAppSelector } from './hooks/useAppSelector';

function App() {
  const isDarkTheme = useAppSelector(state => state.theme.default) === 'dark';

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Main />
      <SnackbarApp />  
    </ThemeProvider>
  )
}

export default App

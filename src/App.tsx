import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './theme/theme';
import { useAppSelector } from './hooks/useAppSelector';
import Router from './routes';

function App() {
  const isDarkTheme = useAppSelector(state => state.theme.default) === 'dark';

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router />
    </ThemeProvider>
  )
}

export default App;

import React, { useState, createContext } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

export const AuthContext = createContext({
  authUser: user,
  setAuthUser: () => {}
});

function App() {
  const [authUser, setAuthUser] = useState(user);

  const authContextValue = {
    authUser,
    setAuthUser: (user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
      
      setAuthUser(user);
    }
  };

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      <ThemeProvider theme={theme}>
        <Router>
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
              <Header title="OnClick" sections={[]} />
              <main>
                <Routes />
              </main>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
          </React.Fragment>
        </Router>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;

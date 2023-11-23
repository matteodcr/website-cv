import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ColorModeContext from './ColorContext';
import { Box, CssBaseline } from '@mui/material';
import Footer from './components/Footer';
import Projects, { Project } from './pages/Projects';
import TurtleRTK from './pages/projects/TurtleRTK';
import './App.css';
import Patatruck from './pages/projects/Patatruck.tsx';
import PollenTraquaire from './pages/projects/PollenTraquaire.tsx';
import Parasist from './pages/projects/Parasist.tsx';
import Curriculum from './pages/Curriculum.tsx';

const projects: Project[] = [
  new TurtleRTK(),
  new Patatruck(),
  new PollenTraquaire(),
  new Parasist(),
];

export default function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Box
            component="header"
            sx={{
              minHeight: '50px',
            }}
          >
            <Layout />
          </Box>
          <Box
            component="article"
            sx={{
              flex: 1,
              px: '25%',
              '@media (max-width: 1700px)': { px: '3%' },
            }}
          >
            <Routes>
              <Route index element={<Home />} />
              <Route path="cv" element={<Curriculum />} />
              <Route path="projects">
                <Route index element={<Projects projects={projects} />} />
                {projects.map(project => (
                  <Route
                    key={project.title.toLowerCase()}
                    path={project.title.toLowerCase()}
                    element={project.content()}
                  />
                ))}
              </Route>
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </Box>
          <Box
            component="footer"
            sx={{
              minHeight: '50px',
            }}
          >
            <Footer />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

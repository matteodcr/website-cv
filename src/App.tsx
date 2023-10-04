import ReactDOM from "react-dom/client";
import * as React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import reportWebVitals from "./reportWebVitals";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import ColorModeContext from "./ColorContext";
import {Box, CssBaseline} from "@mui/material";
import Footer from "./components/Footer";

export default function App() {

    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
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
                <CssBaseline/>
                <BrowserRouter>
                    <Box
                        component="body"
                        sx={{
                            minHeight: '100vh',
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            component="header"
                            sx={{
                                minHeight: '50px',
                            }}
                        >
                            <Layout/>
                        </Box>
                        <Box
                            component="article"
                            sx={{
                                flex: 1,
                                px: '25%',
                                '@media (max-width: 600px)': {px: '3%'},
                            }}
                        >
                            <Routes>
                                <Route index element={<Home/>}/>
                                <Route path="contact" element={<Contact/>}/>
                                <Route path="*" element={<NoPage/>}/>
                            </Routes>
                        </Box>
                        <Box
                            component="footer"
                            sx={{
                                minHeight: '50px',
                            }}
                        >
                            <Footer/>
                        </Box>
                    </Box>

                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App/>);

reportWebVitals();

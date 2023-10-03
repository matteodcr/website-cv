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
                    <Layout/>
                    <Box
                        sx={{
                            px: '25%',
                            '@media (max-width: 600px)': {px: '3%'},
                            display: 'flex',
                            flexWrap: 'wrap',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                            wordBreak: 'break-all',
                            flexDirection: 'column'
                        }}
                    >
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            <Route path="*" element={<NoPage/>}/>
                        </Routes>
                    </Box>

                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App/>);

reportWebVitals();

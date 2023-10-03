import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useTheme} from "@mui/material/styles";
import ColorModeContext from "../ColorContext";

const pages = [
    {text: 'Accueil', href: '/'},
    {text: 'Contact', href: '/contact'}
]

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    /*    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElUser(event.currentTarget);
        };*/

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    /*    const handleCloseUserMenu = () => {
            setAnchorElUser(null);
        };*/

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>


                    <Link to="/" key="/" style={{textDecoration: 'none', color: 'inherit'}}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                lineHeight: '1',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MATTEO
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                lineHeight: '1',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            DECORSAIRE.
                        </Typography>

                    </Link>


                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.text}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="body1"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        MATTEO DECORSAIRE.
                    </Typography>


                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Link to={page.href} key={page.text} style={{textDecoration: 'none'}}>
                                <Button
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                    onClick={handleCloseNavMenu}
                                >
                                    {page.text}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;

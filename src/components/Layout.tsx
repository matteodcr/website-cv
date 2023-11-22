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
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import ColorModeContext from '../ColorContext';
import MaterialSwitch from './MaterialSwitch';

const pages = [
  { text: 'Accueil', href: '/' },
  { text: 'Curriculum', href: '/cv' },
  { text: 'Projets', href: '/projects' },
  { text: 'Contact', href: '/contact' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
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
    <AppBar
      // sx={{ bgcolor: theme.palette.background.default }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            to="/"
            key="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Typography
              variant="h6"
              noWrap
              component="span"
              sx={{
                display: { xs: 'none', md: 'flex' },
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
              component="span"
              sx={{
                display: { xs: 'none', md: 'flex' },
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <Link
                  to={page.href}
                  key={page.text}
                  style={{
                    textDecoration: 'none',
                    color: theme.palette.text.primary,
                  }}
                >
                  <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.text}</Typography>
                  </MenuItem>
                </Link>
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
              display: { xs: 'flex', md: 'none' },
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

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Link
                to={page.href}
                key={page.text}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  onClick={handleCloseNavMenu}
                >
                  {page.text}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <MaterialSwitch
              checked={theme.palette.mode === 'dark'}
              onChange={colorMode.toggleColorMode}
              name="colorModeSwitch"
              color="default"
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        RICHARD ZAMORA 
      </Typography>
      <Button color="inherit"><a sx={{ flexGrow: 1 }} href="#section-1">Presentación</a></Button>
      <Button color="inherit"><a sx={{ flexGrow: 1 }} href="#section-2">About Me</a></Button>
      <Button color="inherit"><a  sx={{ flexGrow: 1 }} href="#section-3">Projects</a></Button>
    </Toolbar>
  </AppBar>
  );
}

export default Navbar;

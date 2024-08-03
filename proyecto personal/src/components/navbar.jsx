import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BasicButtons from './buttonNav';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000b24' }}>
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
        <BasicButtons />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

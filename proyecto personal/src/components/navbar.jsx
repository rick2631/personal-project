import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
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
         
        </IconButton>

        <Typography 
          variant="h3" 
          color='#f71066' 
          component="div" 
          sx={{ 
            flexGrow: 1,
            fontWeight: 'bold', 
            letterSpacing: 2, 
            textTransform: 'uppercase',
            display: 'inline-block'
          }}
        >
          RZ
        </Typography>
        <BasicButtons />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

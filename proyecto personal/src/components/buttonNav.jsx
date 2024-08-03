import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button sx={{ textDecoration: 'none', color: 'inherit' }} text="contained">
        <a href="#section-1" style={{ textDecoration: 'none', color: 'inherit' }}>Presentación</a>
      </Button>
      <Button sx={{ textDecoration: 'none', color: 'inherit' }} text="contained">
        <a href="#section-2" style={{ textDecoration: 'none', color: 'inherit' }}>About Me</a>
      </Button>
      <Button sx={{ textDecoration: 'none', color: 'inherit' }} text="contained">
        <a href="#section-3" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</a>
      </Button>
    </Stack>
  );
}

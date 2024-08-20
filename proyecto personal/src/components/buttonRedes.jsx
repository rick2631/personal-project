
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { RxDoubleArrowDown } from "react-icons/rx";
import { FaRegFilePdf } from "react-icons/fa";


export default function RedesButton() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Stack spacing={3} direction="row">
      <Button
  href="/Curriculum full stack.pdf"
  target="_blank"
  rel="noopener"
  sx={{
    color: 'white',
    '&:hover': {
      backgroundColor: 'red',
      transform: 'scale(1.1)',
    },
    transition: 'all 0.3s ease-in-out',
  }}
>
  < FaRegFilePdf style={{ fontSize: 60 }} />
</Button>
        <Button
          href="https://wa.me/50769080257"

          target="_blank"
          rel="noopener"
          sx={{
            color: 'white',
            '&:hover': {
            backgroundColor: '#25D366',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 60 }} />
        </Button>
        <Button
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="_blank"
          rel="noopener"
          sx={{
            color: 'white',
            '&:hover': {
              backgroundColor: '#004182',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <LinkedInIcon sx={{ fontSize: 60 }}/>
        </Button>
        <Button
          href="https://github.com/rick2631"
          target="_blank"
          rel="noopener"
          sx={{
            color: 'white',
            '&:hover': {
              backgroundColor: '#444',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <GitHubIcon sx={{ fontSize: 60 }}/>
        </Button>
     
      </Stack>
    </div>
  );
}

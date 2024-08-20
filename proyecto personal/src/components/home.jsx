import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import imgRichard from '../img/imgRichard.png'; 
import ActionAreaCard from './ActionAreaCard';
import RedesButton from './buttonRedes';
import { IoLogoJavascript, IoLogoCss3, IoTerminal } from "react-icons/io5";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import ScrollButton from './ScrollButton';

const Home = () => {
  return (
    <Box
      component="section"
      sx={{
        background: 'linear-gradient(90deg, rgba(0,11,36,1) 0%, rgba(9,9,121,1) 35%, rgba(16,8,55,1) 100%)',
      }}
    >
      <Container maxWidth="md">
        <div className="home">
          <section className="section section-1" id="section-1">
            <div className="centered-content">
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#f71066' }}
              >
                Hello I am ..
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#ffffff' }}
              >
                Richard Zamora
              </Typography>
              <Typography
                variant="h6"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#f71066' }}
              >
                Developer 
              </Typography>
            </div>
            <RedesButton />
            <ScrollButton/>
          </section>

          <section className="section section-2" id="section-2" >
        
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold', color: '#f71066' }}
            >
              About Me
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <img
                  src={imgRichard}
                  alt="Richard Zamora"
                 className="responsive-img"
                />
              </Grid>
              <Grid item xs={8}>
                <Typography
                  variant="h7"
                  component="h4"
                  gutterBottom
                  sx={{ fontWeight: 'bold', color: '#ffffff', textAlign: 'justify' }}
                >
                  "I am new to the world of programming, but I am deeply excited by the potential offered by this constantly evolving field. Every day I join with curiosity and openness to the vast universe of information technologies. As I advance in my learning, I discover new tools, languages and methodologies that broaden my understanding and skills. My goal is to continue to grow and adapt to the challenges and opportunities presented by this exciting world, as I strive to master emerging technologies and contribute meaningfully to the programming field."
                  <br />
                  <br />
                  Some of the technologies I am comfortable with:
                  <ul className="list-no-decor">
                    <li><IoLogoJavascript color="#f0db4f" /> ES6 JavaScript</li>
                    <li><FaReact color="#61dafb" /> React</li>
                    <li><IoLogoCss3 color="#2965f1" /> CSS</li>
                    <li><FaHtml5 color="#e34f26" /> HTML</li>
                    <li><FaNodeJs color="#339933" /> Node.js</li>
                    <li><IoTerminal color="#5865f2" /> Terminal</li>
                  </ul>
                </Typography>
                <div/>
              </Grid>
            </Grid>
            <ScrollButton/>
          </section>

          <section className="section section-3" id="section-3">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold', color: '#f71066' }}
            >
              Projects
            </Typography>
            <ActionAreaCard />
          </section>
        </div>
      </Container>
    </Box>
  );
};

export default Home;

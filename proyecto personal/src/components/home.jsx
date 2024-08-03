import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box component="section" sx={{ 
      background: 'linear-gradient(90deg, rgba(0,11,36,1) 0%, rgba(9,9,121,1) 35%, rgba(106,251,176,1) 100%)'
    }}>
      <Container maxWidth="md">
        <div className="home">
          <section className="section section-1" id="section-1">
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#inherit' }}>
              Presentación
            </Typography>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
              Richard Zamora
            </Typography>
            <Typography variant="h6" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'inherit' }}>
              Developer
            </Typography>
          </section>

          <section className="section section-2" id="section-2">
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
            Richard Zamora<br />
            Desarrollador Web Trainee con más de seis meses de experiencia en el desarrollo de aplicaciones web dinámicas y responsivas, utilizando tecnologías de vanguardia como JavaScript, HTML5, CSS3, React, Redux, Node.js, Express.js y PostgreSQL. Actualmente estoy cursando un diplomado en gestión de proyectos, lo que me permite implementar metodologías ágiles y herramientas como Trello para planificar, ejecutar y monitorear proyectos de manera eficiente y efectiva.
            </Typography>
          </section>

          <section className="section section-3" id="section-3">
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Projects
            </Typography>
            <Typography variant="body1" paragraph>
              Contenido de la sección 3
            </Typography>
          </section>
        </div>
      </Container>
    </Box>
  );
}

export default Home;

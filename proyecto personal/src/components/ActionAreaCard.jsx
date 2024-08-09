import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import imgProjectGym from '../img/imgProjectGym.jpeg';
import imgProjectFood from '../img/imgProjectFood.jpeg';

export default function ActionAreaCard() {
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
     <Card sx={{ width: 600, height: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imgProjectGym}
            alt="imgProjectGym"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Gym Project
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A project dedicated to creating a state-of-the-art gym facility with advanced equipment and fitness programs.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      
<Card sx={{ width: 600, height: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imgProjectFood}
            alt="imgProjectFood"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Food Project
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A project focused on promoting healthy eating habits and providing nutritious meal plans for all ages.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

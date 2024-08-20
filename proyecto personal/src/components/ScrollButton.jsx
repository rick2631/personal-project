import React from 'react';
import Button from '@mui/material/Button';
import { RxDoubleArrowDown } from 'react-icons/rx';

export default function ScrollButton() {
  // Función para manejar el desplazamiento hacia abajo
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Desplazarse hacia abajo por la altura de la ventana
      behavior: 'smooth', // Suavizar el desplazamiento
    });
  };

  return (
               
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <Button 
        onClick={handleScrollDown}
        sx={{ 
          
          color: '#f71066', 
          fontSize: '2rem', // Tamaño del texto
          minWidth: 'auto',
          '&:hover': {
            backgroundColor: '#f71066',
            color: '#fff'
          }
        }} 
        variant="contained"
      >
        <RxDoubleArrowDown size="2rem" />
      </Button>
    </div>
  );
}


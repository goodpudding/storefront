import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ width: '100%', backgroundColor: '#f8f8f8', mt: 3, py: 2 }}>
      <Typography variant="body1" align="center">
        Trey Young
      </Typography>
      <Typography variant="body1" align="center">
        Aka goodpudding
      </Typography>
      <Typography variant="body2" align="center" color="text.secondary">
        © {currentYear} Goodpudding Productions
      </Typography>
    </Box>
  );
};

export default Footer;

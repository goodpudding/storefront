import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import SimpleCart from '../SimpleCart';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector((state) => state.cart?.items) || [];
  console.log('STATE CART', cartItems);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
          <Button color="inherit" onClick={handleHomeClick}>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Our Store
          </Typography>
          </Link>
          </Button>
          <Button color="inherit" onClick={handleCartClick}>
            <Badge badgeContent={cartItems.length} color="error">
              <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                Cart
              </Link>
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
      <SimpleCart />
    </Box>
  );
};

export default Header;

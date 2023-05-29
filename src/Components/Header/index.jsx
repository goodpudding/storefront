import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import SimpleCart from '../SimpleCart';

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items) || [];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Our Store
          </Typography>
          <Button color="inherit">
            <Badge badgeContent={cartItems.length} color="error">
              Cart
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
      <SimpleCart />
    </Box>
  );
};

export default Header;

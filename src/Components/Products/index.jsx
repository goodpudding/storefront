import React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { addToCart } from '../../store/cart'; // adjust the path as necessary


const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch({ type: 'DECREMENT_INVENTORY', payload: product._id }); // use _id instead of id
  };
  

  const handleViewDetails = () => {
    // Handle view details action
    // You can navigate to a product details page or perform any other action
  };

  return (
    <Card key={product.name}>
      <CardMedia
        component="img"
        height="140"
        width="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h7" component="div">
          {product.name}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
          Price: {product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Inventory: {product.inventory}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button size="small" onClick={handleViewDetails}>
          View details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Product = ({ product }) => {
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
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Inventory: {product.inventory}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;

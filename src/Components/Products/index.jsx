import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Product = ({ category }) => {
  const allProducts = useSelector(state => state.products.allProducts);

  // Filter products based on the category
  const filteredProducts = allProducts.filter(product => {
    if (category === 'cat food') {
      return product.category === 'food';
    } else {
      return product.category === category;
    }
  });

  return (
    <div>
      {filteredProducts.map(product => (
        <Card key={product.name} sx={{ marginBottom: '10px' }}>
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
      ))}
    </div>
  );
};

export default Product;

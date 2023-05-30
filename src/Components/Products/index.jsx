import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { addToCart } from "../../store/cart"; // adjust the path as necessary
import { decrementInventory } from "../../store/products";
import slugify from "slugify";
import { fetchProducts } from "../../store/products";

// Generate slug from product name
const generateSlug = (productName) => {
  return slugify(productName, { lower: true });
};


const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleAddToCart = (product) => {
    const uniqueCartId = `${product._id}-${Date.now()}`;
    console.log('!!!!!!!!!!', product.name, product._id);
    
    dispatch(addToCart({ ...product, uniqueCartId })); // Pass the product with uniqueCartId as payload
    dispatch(decrementInventory(product._id));  // decrease inventory when a product is added to the cart
    dispatch(fetchProducts());

  };
  
  

  const handleViewDetails = () => {
    const slug = generateSlug(product.name);
    navigate(`/cat-supplies/${slug}`);
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
        <Button size="small" onClick={() => handleAddToCart(product)}>
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

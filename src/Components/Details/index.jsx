import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import slugify from "slugify";

// Generate slug from product name
const generateSlug = (productName) => {
  return slugify(productName, { lower: true });
};


const ProductDetails = () => {
  const { slug } = useParams();
  console.log('Slug:', slug);
  
  const allProducts = useSelector((state) => state.allProducts);
  console.log('All Products:', allProducts);


  const product = Object.values(allProducts).find(
    (p) => generateSlug(p.name) === slug
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {product.description}
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

export default ProductDetails;

import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import slugify from "slugify";
import CardMedia from "@mui/material/CardMedia";


// Generate slug from product name
const generateSlug = (productName) => {
  return slugify(productName, { lower: true });
};

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const allProducts = useSelector((state) => state.products.allProducts);

  const product = Object.values(allProducts).find(
    (p) => generateSlug(p.name) === slug
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Card>
      <CardContent>
      <CardMedia
        component="img"
        height="140"
        width="140"
        image={product.image}
        alt={product.name}
      />
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
      <button onClick={handleGoBack}>Go Back</button>
    </Card>
  );
};

export default ProductDetails;

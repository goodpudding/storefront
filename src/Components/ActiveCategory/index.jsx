import React from "react";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Product from "../Products";

const ActiveCategory = () => {
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const allProducts = useSelector(state => state.products.allProducts);

  let filteredProducts;
  if (activeCategory === 'cat food') {
    filteredProducts = allProducts.filter(product => product.category === 'food');
  } else if (activeCategory) {
    filteredProducts = allProducts.filter(product => product.category === activeCategory);
  } else {
    filteredProducts = allProducts;
  }

  return (
    <div>
      <Typography variant="h6" component="div" sx={{ mt: 2, fontSize: '30px' }}>
        {activeCategory ? `Active Category: ${activeCategory}` : 'Showing All Products'}
      </Typography>
      <List className="product-list">
        {filteredProducts.map(product => (
          <ListItem key={product.name}>
            <Product product={product} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};


export default ActiveCategory;

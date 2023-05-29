import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Product from "../Products";
import { fetchProducts } from "../../store/products";

const ActiveCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const activeCategory = useSelector(
    (state) => state.categories.activeCategory
  );
  const allProducts = useSelector(state => state.products.allProducts);

  console.log("All Products:", allProducts);
  console.log("Active Category:", activeCategory);

  let filteredProducts = [];
  if (allProducts) {
    if (activeCategory) {
      filteredProducts = allProducts.filter(
        (product) => product.category.toLowerCase() === activeCategory
      );
    } else {
      filteredProducts = allProducts;
    }
    
    
  }

  console.log("Filtered Products:", filteredProducts);

  return (
    <div>
      <Typography variant="h6" component="div" sx={{ mt: 2, fontSize: "30px" }}>
        {activeCategory
          ? `Active Category: ${activeCategory}`
          : "Showing All Products"}
      </Typography>
      <List className="product-list">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <ListItem key={product.name}>
              <Product product={product} />
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default ActiveCategory;

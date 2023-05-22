import React from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Product from '../Products';


const ActiveCategory = () => {
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const allProducts = useSelector(state => state.products.allProducts);

  // Filter products based on active category, or show all products if no active category
  const filteredProducts = activeCategory
    ? allProducts.filter(product => product.category === activeCategory)
    : allProducts;

  return (
    <div>
      <h1>{activeCategory}</h1>
      <Product category={activeCategory} />

    </div>
  );
};

export default ActiveCategory;

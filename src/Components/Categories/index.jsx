import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


const categories = ['Cat Food', 'Litter', 'Accessories'];

export default function Categories() {
  const dispatch = useDispatch();
  const activeCategory = useSelector(state => state.categories.activeCategory);

  const handleClick = (category) => {
    dispatch({ type: 'SET_ACTIVE_CATEGORY', category: category.toLowerCase() });
  };

  const handleAllProducts = () => {
    dispatch({ type: 'SET_ACTIVE_CATEGORY', category: '' });
  };

  return (
    <Box>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Browse our Categories
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '250px',
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <React.Fragment key="all">
          <Link
            href="#"
            underline={activeCategory === '' ? 'always' : 'none'}
            onClick={handleAllProducts}
          >
            All
          </Link>
          <Divider orientation="vertical" color="black" flexItem />
        </React.Fragment>
        {categories.map((category, index) => (
          <React.Fragment key={category}>
            <Link
              href="#"
              underline={activeCategory === category.toLowerCase() ? 'always' : 'none'}
              onClick={() => handleClick(category)}
            >
              {category}
            </Link>
            {index < categories.length - 1 && <Divider orientation="vertical" color="black" flexItem />}
          </React.Fragment>
        ))}
      </Box>
     
    </Box>
  );
}

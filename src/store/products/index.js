

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { useSelector } from 'react-redux';


const initialProductsState = {
  allProducts: [],
  results: []
}

const productsReducer = (state = initialProductsState, action) => {
  console.log('ACTION', action); // Add this line

  switch (action.type) {
    case 'FETCH_PRODUCTS':
  console.log('Updating state with fetched pr oducts:', action.payload);
  return {
    ...state,
    allProducts: action.payload,
    results: action.payload,
  };
  case 'DECREMENT_INVENTORY':
    console.log(action.payload);
    return {
      ...state,
      results: state.results.map((product) => {
        if (product._id === action.payload._id) { // updated this line
          return {
            ...product,
            inventory: product.inventory - 1,
          };
        }
        return product;
      }),
    };
  case 'INCREMENT_INVENTORY':
    console.log(action.payload);
    return {
      ...state,
      results: state.results.map((product) => {
        if (product._id === action.payload._id) { // updated this line
          return {
            ...product,
            inventory: product.inventory + 1,
          };
        }
        return product;
      }),
    };
  
    default:
      return state;
  }
};
console.log('All Products:', initialProductsState);


export const fetchProducts = () => async (dispatch, getState) => {
  let response = await fetch('https://cat-store-api.onrender.com/cat-supplies');
  let data = await response.json();

  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: data
  });

  console.log('FETCHING PRODUCTS', getState(), data);
}


export const decrementInventory = (productId) => async (dispatch, getState) => {
  try {
    const response = await fetch(`https://cat-store-api.onrender.com/cat-supplies/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "operation": "decrement",
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const updatedProduct = await response.json();
    console.log(updatedProduct); // <-- add this line

    dispatch({
      type: 'DECREMENT_INVENTORY',
      payload: updatedProduct,
    });

  } catch (error) {
    console.error('Error:', error);
  }
};

export const incrementInventory = (productId) => async (dispatch, getState) => {
  try {
    const response = await fetch(`https://cat-store-api.onrender.com/cat-supplies/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operation: 'increment',
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const updatedProduct = await response.json();

    dispatch({
      type: 'INCREMENT_INVENTORY',
      payload: updatedProduct,
    });

  } catch (error) {
    console.error('Error:', error);
  }
};

const store = createStore(productsReducer, applyMiddleware(thunk));

export default productsReducer;

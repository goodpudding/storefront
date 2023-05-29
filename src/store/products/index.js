const initialProductsState = {
  allProducts: [],
  results: []
};
const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        allProducts: action.payload.allProducts,
        results: action.payload.allProducts, // Use allProducts instead of action.payload.results
      };
    case 'DECREMENT_INVENTORY':
      const updatedProduct = action.payload;
      return {
        ...state,
        results: state.results.map((product) => {
          if (product._id === updatedProduct._id) {
            return {
              ...product,
              inventory: updatedProduct.inventory,
            };
          }
          return product;
        }),
      };
    case 'INCREMENT_INVENTORY':
      const updatedProductIncrement = action.payload;
      return {
        ...state,
        results: state.results.map((product) => {
          if (product._id === updatedProductIncrement._id) {
            return {
              ...product,
              inventory: updatedProductIncrement.inventory,
            };
          }
          return product;
        }),
      };
    default:
      return state;
  }
};



console.log('All Products:', initialProductsState.allProducts);

export const fetchProducts = () => async (dispatch, getState) => {
  let response = await fetch('https://cat-store-api.onrender.com/cat-supplies');
  let data = await response.json();

  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: { allProducts: data },
  });

  console.log('FETCHING PRODUCTS', getState(), data);
};

export const decrementInventory = (productId) => async (dispatch, getState) => {
  try {
    const response = await fetch(`https://cat-store-api.onrender.com/cat-supplies/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operation: 'decrement',
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const updatedProduct = await response.json();
    console.log(updatedProduct);

    dispatch({
      type: 'DECREMENT_INVENTORY',
      payload: updatedProduct,
    });

    // Trigger a refetch of the products
    dispatch(fetchProducts());
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

    // Trigger a refetch of the products
    dispatch(fetchProducts());
  } catch (error) {
    console.error('Error:', error);
  }
};


export default productsReducer;

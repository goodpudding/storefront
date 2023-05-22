
const initialProductsState = {
  allProducts: [
    {
      category: 'food',
      name: 'Dry Food',
      description: '5 lbs of dry food',
      price: '$24.99',
      inventory: 50
    },
    {
      category: 'food',
      name: 'Wet Food',
      description: '8oz Can of Chicken',
      price: '$1.29',
      inventory: 200
    },
    {
      category: 'litter',
      name: 'Natural Litter',
      description: '3 lbs Easy to scoop litter',
      price: '$19.99',
      inventory: 50
    },
    {
      category: 'accessories',
      name: 'Cat toys',
      description: 'A faux mouse for your cat',
      price: '$1.99',
      inventory: 200
    },
  ]
}

const productsReducer = (state = initialProductsState, action) => {
  switch(action?.type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        filteredProducts: state.allProducts.filter(product => product.category === action.category)
      };
    default:
      console.warn(`Unhandled action type: ${action?.type}`);
      return state;
  }
}

export default productsReducer;
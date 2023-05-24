
const initialProductsState = {
  allProducts: [
    {
      category: 'food',
      name: 'Dry Food',
      description: '5 lbs of dry food',
      price: '$24.99',
      inventory: 50,
      image: "./CatStore/DryFood.jpg"
    },
    {
      category: 'food',
      name: 'Wet Food',
      description: '8oz Can of Chicken',
      price: '$1.29',
      inventory: 200,
      image:"./CatStore/CanFood.jpg"
    },
    {
      category: 'litter',
      name: 'Litter',
      description: '3 lbs litter',
      price: '$19.99',
      inventory: 50,
      image:"./CatStore/Sustainably_Yours_Cat-Litter-13lb-1024x1024.jpg"
    },
    {
      category: 'accessories',
      name: 'Cat toys',
      description: 'A faux mouse for your cat',
      price: '$1.99',
      inventory: 200,
      image: "./CatStore/download.jpg"
    },
  ]
}

const productsReducer = (state = initialProductsState, action) => {
  switch (action?.type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        filteredProducts: state.allProducts.filter(
          (product) => product.category === action.category
        ),
      };
    default:
      return state;
  }
};


export default productsReducer;
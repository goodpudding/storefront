import productsReducer from './index';

describe('productsReducer', () => {
  xit('should return the initial state', () => {
    const initialState = {
      allProducts: [
        {
          category: 'food',
          name: 'Dry Food',
          description: '5 lbs of dry food',
          price: '$24.99',
          inventory: 50,
          image: './CatStore/DryFood.jpg',
        },
        {
          category: 'food',
          name: 'Wet Food',
          description: '8oz Can of Chicken',
          price: '$1.29',
          inventory: 200,
          image: './CatStore/CanFood.jpg',
        },
        {
          category: 'litter',
          name: 'Litter',
          description: '3 lbs litter',
          price: '$19.99',
          inventory: 50,
          image: './CatStore/Sustainably_Yours_Cat-Litter-13lb-1024x1024.jpg',
        },
        {
          category: 'accessories',
          name: 'Cat toys',
          description: 'A faux mouse for your cat',
          price: '$1.99',
          inventory: 200,
          image: './CatStore/download.jpg',
        },
      ],
      filteredProducts: [], // Empty array for filtered products
    };
  
    const action = {};
  
    const newState = productsReducer(undefined, action);
  
    expect(newState).toEqual(initialState);
  });
  

  xit('should handle SET_ACTIVE_CATEGORY', () => {
    const initialState = {
      allProducts: [
        {
          category: 'food',
          name: 'Dry Food',
          description: '5 lbs of dry food',
          price: '$24.99',
          inventory: 50,
          image: './CatStore/DryFood.jpg',
        },
        // ... other initial products
      ],
    };

    const action = {
      type: 'SET_ACTIVE_CATEGORY',
      category: 'food',
    };

    const newState = productsReducer(initialState, action);

    expect(newState.filteredProducts).toEqual([
      {
        category: 'food',
        name: 'Dry Food',
        description: '5 lbs of dry food',
        price: '$24.99',
        inventory: 50,
        image: './CatStore/DryFood.jpg',
      },
      {
        category: 'food',
        name: 'Wet Food',
        description: '8oz Can of Chicken',
        price: '$1.29',
        inventory: 200,
        image: './CatStore/CanFood.jpg',
      },
    ]);
  });

  it('should handle unknown action type', () => {
    const initialState = {
      allProducts: [
        {
          category: 'food',
          name: 'Dry Food',
          description: '5 lbs of dry food',
          price: '$24.99',
          inventory: 50,
          image: './CatStore/DryFood.jpg',
        },
        // ... other initial products
      ],
    };

    const action = {
      type: 'UNKNOWN_ACTION',
    };

    const newState = productsReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});

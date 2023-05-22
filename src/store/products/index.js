const initialProductsState = {
  allProducts: [
    {
      id: 1,
      category: 'food',
      name: 'Dry Food',
      description: '5 lbs of dry food',
      price: '$24.99',
      inventory: 50,
      image: './CatStore/DryFood.jpg',
    },
    {
      id: 2,
      category: 'food',
      name: 'Wet Food',
      description: '8oz Can of Chicken',
      price: '$1.29',
      inventory: 200,
      image: './CatStore/CanFood.jpg',
    },
    {
      id: 3,
      category: 'litter',
      name: 'Litter',
      description: '3 lbs litter',
      price: '$19.99',
      inventory: 50,
      image: './CatStore/Sustainably_Yours_Cat-Litter-13lb-1024x1024.jpg',
    },
    {
      id: 4,
      category: 'accessories',
      name: 'Cat toys',
      description: 'A faux mouse for your cat',
      price: '$1.99',
      inventory: 200,
      image: './CatStore/download.jpg',
    },
    {
      id: 5,
      category: 'food',
      name: 'Canned Tuna',
      description: 'Tasty canned tuna for your cat',
      price: '$2.99',
      inventory: 100,
      image: './CatStore/CannedTuna.jpg',
    },
    {
      id: 6,
      category: 'food',
      name: 'Salmon Treats',
      description: 'Delicious salmon treats for your cat',
      price: '$3.99',
      inventory: 80,
      image: './CatStore/SalmonTreats.jpg',
    },
    {
      id: 7,
      category: 'food',
      name: 'Chicken Bites',
      description: 'Crunchy chicken bites for your cat',
      price: '$2.49',
      inventory: 120,
      image: './CatStore/ChickenBites.jpg',
    },
    {
      id: 8,
      category: 'litter',
      name: 'Clumping Litter',
      description: 'Premium clumping litter for easy cleanup',
      price: '$14.99',
      inventory: 60,
      image: './CatStore/ClumpingLitter.jpg',
    },
    {
      id: 9,
      category: 'litter',
      name: 'Silica Crystal Litter',
      description: 'Odor-absorbing silica crystal litter',
      price: '$19.99',
      inventory: 40,
      image: './CatStore/SilicaCrystalLitter.jpg',
    },
    {
      id: 10,
      category: 'litter',
      name: 'Pine Pellet Litter',
      description: 'Natural pine pellet litter for freshness',
      price: '$12.99',
      inventory: 80,
      image: './CatStore/PinePelletLitter.jpg',
    },
    {
      id: 11,
      category: 'accessories',
      name: 'Cat Scratching Post',
      description: 'Durable cat scratching post for claw maintenance',
      price: '$29.99',
      inventory: 30,
      image: './CatStore/CatScratchingPost.jpg',
    },
    {
      id: 12,
      category: 'accessories',
      name: 'Interactive Feather Toy',
      description: 'Entertaining interactive feather toy for playtime',
      price: '$6.99',
      inventory: 100,
      image: './CatStore/FeatherToy.jpg',
    },
    {
      id: 13,
      category: 'accessories',
      name: 'Cat Bed',
      description: 'Cozy cat bed for a comfortable nap',
      price: '$19.99',
      inventory: 50,
      image: './CatStore/CatBed.jpg',
    }
  ],
};

const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case 'DECREMENT_INVENTORY':
      return {
        ...state,
        allProducts: state.allProducts.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              inventory: product.inventory - 1,
            };
          }
          return product;
        }),
      };
    case 'INCREMENT_INVENTORY':
      return {
        ...state,
        allProducts: state.allProducts.map((product) => {
          if (product.id === action.payload) {
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

export default productsReducer;

const initialCartState = {
  items: [], 
};

export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: { ...item, id: Date.now() },
  };
};

export function saveCartToLocalStorage(cart) {
  try {
    const serializedCart = JSON.stringify(cart);
    console.log("Saving to local storage:", serializedCart);
    localStorage.setItem('cart', serializedCart);
  } catch(e) {
    console.warn(e);
  }
}

export function loadCartFromLocalStorage() {
  try {
    const serializedCart = localStorage.getItem('cart');
    const parsedCart = serializedCart === null ? [] : JSON.parse(serializedCart);

    // Ensure parsedCart is an array
    if (!Array.isArray(parsedCart)) {
      console.warn('Loaded cart from local storage is not an array:', parsedCart);
      return [];
    }

    return parsedCart;
  } catch(e) {
    console.warn(e);
    return [];
  }
}


const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((itemInstance) => itemInstance.id !== action.payload),
      };
    case 'LOAD_CART_FROM_STORAGE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};



export default cartReducer;

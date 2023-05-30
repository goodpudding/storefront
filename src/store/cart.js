const initialCartState = {
  items: [],
};

export const addToCart = (item) => {
  console.log('ITEM!!!!', item)
  const uniqueCartId = `${item._id}-${Date.now()}`;
  return {
    type: "ADD_TO_CART",
    payload: { ...item, uniqueCartId },
  };
};

export const removeFromCart = (uniqueCartId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: uniqueCartId,
  };
};
export const updateQuantity = (itemId, quantity) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: { itemId, quantity },
  };
};

export function saveCartToLocalStorage(cart) {
  try {
    const serializedCart = JSON.stringify(cart.items);
    console.log("Saving to local storage:", serializedCart);
    localStorage.setItem("cart", serializedCart);
  } catch (e) {
    console.warn(e);
  }
}

export function loadCartFromLocalStorage() {
  try {
    const serializedCart = localStorage.getItem("cart");
    const parsedCart =
      serializedCart === null ? [] : JSON.parse(serializedCart);

    // Ensure parsedCart is an array
    if (!Array.isArray(parsedCart)) {
      console.warn(
        "Loaded cart from local storage is not an array:",
        parsedCart
      );
      return { items: [] };
    }

    return { items: parsedCart };
  } catch (e) {
    console.warn(e);
    return { items: [] };
  }
}
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_FROM_CART":
      const updatedItems = state.items.filter(
        (item) => item.uniqueCartId !== action.payload
      );
      return {
        ...state,
        items: updatedItems,
      };

    case "LOAD_CART_FROM_STORAGE":
      return {
        ...state,
        ...action.payload,
      };
       case "UPDATE_QUANTITY":
      const { itemId, quantity } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item._id === itemId) {
            return {
              ...item,
              quantity: quantity,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;

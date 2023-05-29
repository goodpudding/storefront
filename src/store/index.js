import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoryReducer from './categories';
import productsReducer from './products';
import thunk from './middlewares/thunk';
import logger from './middlewares/logger';
import cartReducer from './cart';
import { loadCartFromLocalStorage, saveCartToLocalStorage } from './cart';



let rootReducer = (state, action) => {
  if (action.type === 'LOAD_CART_FROM_STORAGE') {
    return {
      ...state,
      cart: action.payload,
    };
  }

  return combineReducers({
    categories: categoryReducer,
    products: productsReducer,
    cart: cartReducer,
  })(state, action);
};



const persistedState = loadCartFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk, logger),
);

store.subscribe(() => saveCartToLocalStorage(store.getState().cart));



// Dispatch an action to load the cart from local storage
const cartFromStorage = loadCartFromLocalStorage();
if (cartFromStorage !== undefined) {
  store.dispatch({ type: 'LOAD_CART_FROM_STORAGE', payload: cartFromStorage });
}


store.subscribe(() => saveCartToLocalStorage(store.getState().cart));



export default store;

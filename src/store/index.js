import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoryReducer from './categories';
import productsReducer from './products';
import thunk from './middlewares/thunk';
import logger from './middlewares/logger';
import cartReducer from './cart';
import { loadCartFromLocalStorage, saveCartToLocalStorage } from './cart';

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
});

const storeEnhancer = (state = {}, action) => {
  if (action.type === 'LOAD_CART_FROM_STORAGE') {
    return {
      ...state,
      cart: action.payload,
    };
  }

  return rootReducer(state, action);
};

const persistedState = loadCartFromLocalStorage();

const store = createStore(
  storeEnhancer,
  persistedState,
  applyMiddleware(thunk, logger),
);

store.subscribe(() => saveCartToLocalStorage(store.getState().cart));

// Dispatch an action to load the cart from local storage
const cartFromStorage = loadCartFromLocalStorage();
if (cartFromStorage !== undefined) {
  store.dispatch({ type: 'LOAD_CART_FROM_STORAGE', payload: cartFromStorage });
}

export default store;

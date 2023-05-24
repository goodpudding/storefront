import { legacy_createStore as createStore, combineReducers } from 'redux';
import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

let reducers = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
});

let store = createStore(reducers);

export default store;

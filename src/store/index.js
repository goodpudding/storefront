import { legacy_createStore as createStore, combineReducers } from 'redux';
import categoryReducer from './categories';
import productsReducer from './products';

let reducers = combineReducers({
  categories: categoryReducer,
  products : productsReducer,
});

let store = createStore(reducers);

export default store;



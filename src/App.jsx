import './App.scss';
import { Provider } from 'react-redux'; 
import store from './store';
import Categories from './Components/Categories';
import Products from './Components/Products';
import Header from './Components/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Header />
          <Categories />
          {/* <Products /> */}
        </header>
      </div>
    </Provider>
  );
}

export default App;

import './App.scss';
import { Provider } from 'react-redux'; 
import store from './store';
import Categories from './Components/Categories';
import ActiveCategory from './Components/ActiveCategory';
import Header from './Components/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Header />
          <Categories />
          <ActiveCategory />
        </header>
      </div>
    </Provider>
  );
}

export default App;

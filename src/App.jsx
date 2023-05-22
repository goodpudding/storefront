import './App.scss';
import { Provider } from 'react-redux'; 
import store from './store';
import Categories from './Components/Categories';
import ActiveCategory from './Components/ActiveCategory';
import Header from './Components/Header';
import Footer from './Components/Footer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Header />
          <Categories />
          <div className="itemBox">
          <ActiveCategory />
          </div>
        </header>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

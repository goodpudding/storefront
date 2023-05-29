import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import Categories from "./Components/Categories";
import ActiveCategory from "./Components/ActiveCategory";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/Details";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
            <Categories />
            <div className="itemBox">
              <Routes>
                <Route exact path="/" element={<ActiveCategory />} />
                <Route
                  path="/cat-supplies/:slug"
                  element={<ProductDetails />}
                />
              </Routes>
            </div>
          </header>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

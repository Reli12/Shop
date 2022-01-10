import React from "react";
import data from "./data";
import Product from "./components/Product";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Shop
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/singin">Sing in</a>
          </div>
        </header>
        <main>
          <div className="row center">
            {data.products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
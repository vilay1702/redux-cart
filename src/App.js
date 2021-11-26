import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Shop,
  Products,
  Product,
  ProductPage,
  Cart,
} from "./Components";
import "./css/index.scss";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="product/:id" element={<ProductPage />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="*" element={<Shop />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductDetails from './pages/product-details';
import AllProducts from './pages/all-products';
import Login from './pages/login';
import CreateAccount from './pages/create-account';
import Cart from './pages/cart';
import Orders from './pages/orders';
import OrderDetails from './pages/order-dtails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/shop" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-details/:id" element={<OrderDetails />} />
      </Routes>
    </>
  );
}

export default App;

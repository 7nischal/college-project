import React, { useEffect, useState } from 'react';
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
import Checkout from './pages/checkout';
import { isAuth } from './services/black/user-services';
import { ProtectedRoute } from './services/guarded-route';

function App() {
  const [isLogged, setIsLogged] = useState<any>(true);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await isAuth();
      setIsLogged(response);
    }
    checkAuth();
  }, []);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/shop" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/orders" element={
            <ProtectedRoute auth={isLogged}>
              <Orders />
            </ProtectedRoute>
        } />
        <Route path="/order-details/:id" element={
            <ProtectedRoute auth={isLogged}>
              <OrderDetails />
            </ProtectedRoute>
        } />
        
        <Route path="/checkout" element={
            <ProtectedRoute auth={isLogged}>
              <Checkout />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  );
}

export default App;

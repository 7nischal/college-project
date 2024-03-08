import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTotalItems } from '../services/cart-services';

const CartContext = createContext<any>({});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }:any) => {
  const [quantity, setQuantity] = useState(getTotalItems());

  useEffect(() => {
    const updateCart = () => {
      setQuantity(getTotalItems());
    };

    // Set up an event listener for changes
    window.addEventListener('cartUpdated', updateCart);

    // Cleanup the listener on component unmount
    return () => window.removeEventListener('cartUpdated', updateCart);
  }, []);

  return (
    <CartContext.Provider value={{ quantity }}>
      {children}
    </CartContext.Provider>
  );
};

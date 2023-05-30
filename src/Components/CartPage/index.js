import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../store/cart";
import {  incrementInventory, fetchProducts } from "../../store/products"
import Cart from "../SimpleCart";


const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId, productId) => {
    dispatch(removeFromCart(itemId));
    dispatch(incrementInventory(productId));
    dispatch(fetchProducts());
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateQuantity(itemId, quantity));
  };

  const handleCheckout = () => {
    // Handle the checkout process here
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Cart
          cartItems={cartItems}
          handleRemoveItem={handleRemoveItem}
          handleUpdateQuantity={handleUpdateQuantity}
        />
      )}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CartPage;
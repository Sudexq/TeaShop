import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/cart.css";

const Cart = () => {
  const { cartItems, updateCartItemQuantity, removeFromCart, totalPrice } =
    useContext(CartContext);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      updateCartItemQuantity(id, newQuantity);
    }
  };

  return (
    <div className="cartPage">
      <h2>Sepetiniz</h2>
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <div className="cart-container">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div>
                <h3>{item.name}</h3>
                <p>Birim Fiyat: {item.price} ₺</p>
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <p>Toplam: {item.totalPrice} ₺</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  Sepetten Çıkar
                </button>
              </div>
            </div>
          ))}
          <div className="goToPayment">
            <h3>Toplam Sepet Fiyatı: {totalPrice} ₺</h3>
            <button className="checkout-button">Go To Payment Page</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

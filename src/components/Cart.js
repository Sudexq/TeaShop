import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/cart.css"

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cartPage">
      <h2>Sepetiniz</h2>
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price} ₺</p>
              </div>
            </div>
          ))}
          <button className="checkout-button">Ödeme Sayfasına Git</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

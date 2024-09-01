import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../css/products.css";
import { CartContext } from '../context/CartContext';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Context'ten addToCart'u alıyoruz

  // API'den ürünleri çekmek için useEffect kullanıyoruz
  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Ürünler çekilirken hata oluştu:", error);
      });
  }, []);

  return (
    <div className="productsPage">
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>

            {/* Hover yaptığınızda fiyat ve sepete ekle butonu gözükür */}
            <div className="product-hover">
              <p className="product-price">{product.price} ₺</p>
              <button onClick={() => addToCart(product)} className="add-to-cart">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

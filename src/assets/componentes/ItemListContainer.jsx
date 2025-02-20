import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import CartWidget from "./CartWidget";
import './NavBar.css';
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://dummyjson.com/products";
        if (id) {
          url = `https://dummyjson.com/products/category/${id}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }

        const data = await response.json();
        setProductos(data.products || []);
      } catch (error) {
        console.error("Error al obtener productos:", error);
        setProductos([]);
      }
    };

    fetchData();
  }, [id]); 

  return (
    <div className="container">
      

      <div className="product-list">
        {productos.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <h4 className="product-price">{product.category}</h4>
            <Link to={`/product/${product.id}`} className="info-button">More info</Link>
            <div className="product-footer">
              <span className="product-price">${product.price}</span>
              <button className="cart-button">🛒 Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

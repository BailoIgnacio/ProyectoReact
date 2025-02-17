import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import CartWidget from "./CartWidget";
import './NavBar.css'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carrito, setCarrito] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProductos(data.products);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchData();
  }, []);

  const handleInfo = (product) => {
    if (selectedProduct?.id === product.id){
        setSelectedProduct(null)
    } else {
        setSelectedProduct(product)
    }
  };

  const HandleAdd = () => {
    setCarrito(prevCarrito => prevCarrito + 1)
  }

  return (
    <div className="container">
      <div className="cart-widget">
        <CartWidget carrito={carrito}/>
      </div>
      <div className="product-list">
        {productos.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <button className="info-button" onClick={() => handleInfo(product)}>
              More info
            </button>
            <div className="product-footer">
              <span className="product-price">${product.price}</span>
              <button className="cart-button"onClick={() => HandleAdd(product)}>🛒 Add</button>
            </div>

            
            {selectedProduct?.id === product.id && (
              <div className="product-details">
                <p className="product-description">{product.description}</p>
                <p className="product-stock">Stock: {product.stock}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

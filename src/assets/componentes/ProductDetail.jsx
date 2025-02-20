import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <img src={product.thumbnail} alt={product.title} className="product-detail-image" />
        <h3 className="product-detail-title">{product.title}</h3>
        <p className="product-detail-description">{product.description}</p>
        <span className="product-detail-price">${product.price}</span>
        <span className="product-detail-stock">Stock: {product.stock}</span>
      </div>
    </div>
  );
};

export default ProductDetail;

import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params.productId]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-details-container">
      <div className="product-details-card">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="category">{product.category}</p>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

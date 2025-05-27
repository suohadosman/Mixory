import { Link } from "react-router-dom";
import "./ProductsList.css";
import { useState } from "react"
function Product(props) {
  const { product, showButton } = props;
  const [expandedCards, setExpandedCards] = useState([]);


  const toggleText = (id) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };
  
  return (
    <>
      <div className="card">
      <div className="image-container">
  <img src={product.image} className="card-img" alt={product.title} />
</div>
        <div className="card-body">
          <p className="card-title">{product.title}</p>
          <p
  className="card-text"
  style={{
    maxHeight: expandedCards.includes(product.id) ? "none" : "25px",
    overflow: "hidden",
    transition: "max-height 0.3s ease",
  }}
>
  {product.description}
</p>

<button
  className="btn btn-link p-0 "
  onClick={() => toggleText(product.id)}
>
  {expandedCards.includes(product.id) ? "Show Less" : "Read More"}
</button>

          <p className="card-price"> Price: {product.price}$</p>
          {showButton && (
            <Link className="btn btn-primary" to={`/product/${product.id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;

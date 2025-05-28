import { useContext } from "react";
import { CartContext } from "./CartContext";
import './Cart.css'

function Cart() {
  const { cartItems, removeFromCart, confirmItem } = useContext(CartContext);

  return (
    <div className="container py-4">
      <h2 className="mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="cart-container mb-3 d-flex flex-row align-items-center p-3"
          >
            <img
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="me-3"
              style={{ objectFit: "contain" }}
            />
            <div className="flex-grow-1">
              <h5>{item.title}</h5>
              <p className="text-muted-1">${item.price}</p>
            </div>

            <div className="d-flex gap-2">
              {!item.confirmed ? (
                <>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => confirmItem(item.id)}
                  >
                    ✔️ Confirm
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌ Remove
                  </button>
                </>
              ) : (
                <span className="badge bg-success p-2">✔️ Confirmed</span>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

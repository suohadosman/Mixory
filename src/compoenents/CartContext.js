import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // إضافة منتج جديد للسلة مع confirmed = false
  const addToCart = (product) => {
    const newItem = { ...product, confirmed: false };
    setCartItems((prev) => [...prev, newItem]);
  };

  // حذف منتج من السلة
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // تأكيد منتج (يخفي زر الحذف)
  const confirmItem = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, confirmed: true } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, confirmItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

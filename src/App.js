import Navbar from "./compoenents/Navbar";
import ProductsList from "./compoenents/ProductsList";
import Slider from "./compoenents/Slider";
import { Routes, Route } from "react-router-dom";
import About from "./compoenents/About";
import Contact from "./compoenents/Contact";
import ProductDetails from "./compoenents/ProductDetails";
import Cart from './compoenents/Cartpage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

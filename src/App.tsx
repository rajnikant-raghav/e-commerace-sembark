import { CartProvider } from "./context/cartContext";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ShoppingCart from "./pages/ShoppingCart";
const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;

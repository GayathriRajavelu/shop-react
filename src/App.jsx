import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import CartModal from "./components/CartModal.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={() => setOpenModal(true)} />
      <ProductList products={products} addToCart={addToCart} />

      {openModal && (
        <CartModal
          cart={cart}
          closeModal={() => setOpenModal(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;

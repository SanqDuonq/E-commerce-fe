import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="px4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/order" element={<Order />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};

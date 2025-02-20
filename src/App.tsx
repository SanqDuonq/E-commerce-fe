import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/home";
import Collection from "./pages/collection";
import About from "./pages/about";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Login from "./pages/login";
import PlaceOrder from "./pages/place-order";
import Order from "./pages/order";
import SearchBar from "./components/layout/search-bar";
import { ToastContainer } from "react-toastify";
import Navbar from "./admin/Navbar";
import Footer from "./components/layout/Footer";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <div className="font-sans px4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <Navbar />
          <SearchBar />
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
          <Footer />
        </QueryClientProvider>
        <Toaster />
      </div>
    </>
  );
}

export default App;

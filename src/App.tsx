import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SearchBar from "./components/layout/SearchBar";
import { ToastContainer, toast } from "react-toastify";
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

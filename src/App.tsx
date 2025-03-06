import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/sign-up";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";

import SearchBar from "./components/layout/search-bar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/layout/footer";
import Home from "./pages/home";
import Collection from "./pages/collection/collection";
import About from "./pages/about";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Login from "./pages/auth/login";
import PlaceOrder from "./pages/place-order";
import Order from "./pages/Orders/order";
import Navbar from "./components/layout/navbar";
import VerifyEmail from "./pages/auth/verify-email";
import Kitchen from "./pages/collection/furniture/kitchen";
import LivingRoom from "./pages/collection/furniture/living-room";
import BedRoom from "./pages/collection/furniture/bedroom";
import Office from "./pages/collection/furniture/office";
import ForgotPassword from "./pages/auth/forgot-password";
import ResetPassword from "./pages/auth/reset-password";
import Profile from "./pages/auth/profile";
import Rugs from "./pages/collection/rugs/rugs";
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
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="furniture/living-room" element={<LivingRoom />} />
            <Route path="furniture/kitchen" element={<Kitchen />} />
            <Route path="furniture/bedroom" element={<BedRoom />} />
            <Route path="furniture/office" element={<Office />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="rest-password" element={<ResetPassword />} />
            <Route path="profile" element={<Profile />} />
            <Route path="rugs" element={<Rugs />} />
          </Routes>
          <Footer />
        </QueryClientProvider>
        <Toaster />
      </div>
    </>
  );
}

export default App;


import About from "@/pages/about";
import Profile from "@/pages/auth/profile";
import Cart from "@/pages/cart";
import Collection from "@/pages/collection/collection";
import DecorMirrors from "@/pages/collection/decor-mirrors/decor-mirrors";
import BedRoom from "@/pages/collection/furniture/bedroom";
import Furniture from "@/pages/collection/furniture/furniture";
import Kitchen from "@/pages/collection/furniture/kitchen";
import LivingRoom from "@/pages/collection/furniture/living-room";
import Office from "@/pages/collection/furniture/office";
import Lighting from "@/pages/collection/lighting/lighting";
import Outdoor from "@/pages/collection/outdoor/outdoor";
import PillowThrows from "@/pages/collection/pillows-throws/pillows-throws";
import Rugs from "@/pages/collection/rugs/rugs";
import DinnerWare from "@/pages/collection/tabletop-bar/dinnerware-flatware";
import TabletopBar from "@/pages/collection/tabletop-bar/tabletop-bar";
import Home from "@/pages/home";
import Order from "@/pages/orders/order";
import ListOrder from "@/pages/orders/order-list";
import PlaceOrder from "@/pages/place-order";
import Product from "@/pages/product";
import { Bath, Contact } from "lucide-react";
import { Route } from "react-router-dom";

const PrivateRoute = () => (
  <>
    <Route path="profile" element={<Profile />} />
    <Route path="order-list" element={<ListOrder />} />
    <Route path="/product/:productId" element={<Product />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/place-order" element={<PlaceOrder />} />
    <Route path="/order" element={<Order />} />
    <Route path="/" element={<Home />} />
    <Route path="/collection" element={<Collection />} />
    <Route path="rugs" element={<Rugs />} />
    <Route path="furniture" element={<Furniture />} />
    <Route path="furniture/living-room" element={<LivingRoom />} />
    <Route path="furniture/kitchen" element={<Kitchen />} />
    <Route path="furniture/bedroom" element={<BedRoom />} />
    <Route path="furniture/office" element={<Office />} />
    <Route path="bedding-bath" element={<Bath />} />
    <Route path="decor-mirrors" element={<DecorMirrors />} />
    <Route path="lighting" element={<Lighting />} />
    <Route path="outdoor" element={<Outdoor />} />
    <Route path="pillows-throws" element={<PillowThrows />} />
    <Route path="tabletop-bar/dinnerware" element={<DinnerWare />} />
    <Route path="tabletop-bar/tabletop" element={<TabletopBar />} />
  </>
);

export default PrivateRoute;

import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homePage.js";
import About from "./pages/about.js";
import Reservation from "./pages/bookingPage.js";
import Order from "./pages/order.js";
import Login from "./pages/login.js";
import Confirmation from "./pages/confirmation.js";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
import { Routes, Route } from "react-router-dom";
import Homepage from "../page/homePage.js";
import About from "../page/about.js";
import Reservation from "../page/bookingPage.js";
import Order from "../page/order.js";
import Login from "../page/login.js";
import Confirmation from "../page/confirmation.js";

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
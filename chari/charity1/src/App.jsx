import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
// import SignUp from "./pages/SignUp";
// import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />

       <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}

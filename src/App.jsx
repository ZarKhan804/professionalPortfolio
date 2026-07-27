import React from "react";
import Navbar from "./Components/Navbar";
import Marquee from "./Components/Marquee";
import Herosection from "./Components/Herosection";
import About from "./Components/About";
import Allfolder from "./Components/Allfolder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/Forgetpassword";
import Otp from "./Pages/Otp";
import ResetPassword from "./Pages/Resetpassword";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Allfolder />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
